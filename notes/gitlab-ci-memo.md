# GitLab CI/CD メモ

## .gitlab-ci.yml の構成要素と役割

| キーワード | 役割 |
|---|---|
| `workflow` | パイプライン自体を起動するか判定する門番。ジョブではない。 |
| `stages` | 実行順序を定義する。前のstageが完了しなければ次は実行されない。 |
| 隠しジョブ（`.`始まり） | テンプレート。`extends` で参照されるだけで、単独では実行されない。 |
| 各ジョブ | 実際の手順書。`extends` があれば隠しジョブの設定をコピペして完成形になる。 |

---

## GitLabの動作フェーズ

GitLabはymlを上から順に実行しているわけではない。
**解析フェーズ**で全体を組み上げてから、**実行フェーズ**で動く。

```
【解析フェーズ】（実行前）
  1. extends を展開して各ジョブの完成形を作る
  2. workflow の rules を評価 → パイプラインを起動するか決める
  3. 各ジョブの rules を評価 → 実行するジョブを確定する
  4. stages で実行順序を決める

【実行フェーズ】
  確定した順番で実行するだけ
```

---

## workflow・rules・stages の役割分担

```
① workflow   → パイプラインを起動するか？（門番）
② rules      → どのジョブを実行するか？（選別）
③ stages     → 選ばれたジョブをどの順番で実行するか？（順番）
```

---

## extends の動作

`extends` = **設定のコピペ**。隠しジョブから呼ばれるのではなく、各ジョブが隠しジョブの設定を引き取る。方向に注意。

```yaml
# .deploy_base の設定が deploy-staging にコピペされる
deploy-staging:
  extends: .deploy_base  # stage: deploy, when: manual, before_script が引き継がれる
  rules:
    - if: ...            # 自分自身の設定
  script:
    - ...                # 自分自身の設定
```

GitLabが実行対象として認識するのは完成品のジョブだけ。隠しジョブは対象外。

---

## .gitlab-ci.yml の読み方

1. `stages` → 大まかな流れを把握（地図）
2. 各ジョブ → 手順書を読む（`extends` があれば隠しジョブと合体させて読む）
3. `workflow` → 「そもそもいつ動く？」を確認

隠しジョブは最初から読もうとせず、各ジョブを読みながら `extends` を見たときに参照する。

---

## 実際にこのファイルを読む手順（実践例）

**ステップ1: `stages` で全体像を把握**

`test → build → deploy` の順に動くとわかる。

**ステップ2: 隠しジョブはいったん脇に置く**

`.node_base` と `.deploy_base` は後で参照するテンプレートとして存在を把握するだけ。

**ステップ3: 各ジョブを順番に読む**

```
test ジョブ
  → extends: .node_base なので合体させて読む
  → before_script: npm install
  → script: npm test

build ジョブ
  → extends: .node_base なので合体させて読む
  → before_script: npm install
  → script: npm run build
  → artifacts: dist/ に成果物を保存

deploy-staging ジョブ
  → rules があるので「この条件のときだけ実行」とわかる
  → extends: .deploy_base なので合体させて読む
  → when: manual（手動実行）
  → before_script: lftpをインストール
  → script: FTPでステージングにアップロード

deploy-production ジョブ
  → deploy-staging と同じ構造、デプロイ先が本番になるだけ
```

**ステップ4: 各ジョブの手順書が揃ったので `stages` の順番で実行**

それぞれの手順書が完成形として組み上がったので、`stages` の順番（test → build → deploy）に従って実行される。

---

## このプロジェクトの CI/CD 設計

### トリガー条件（workflow）

タグ名が以下の形式の場合のみパイプラインが起動する。

| タグ形式 | 例 |
|---|---|
| `staging-yyyymmdd-n` | `staging-20250218-1` |
| `production-yyyymmdd-n` | `production-20250218-1` |

### パイプラインの流れ

```
タグプッシュ
  ↓
test（npm test）     ← 常に実行
  ↓
build（npm run build）← 常に実行、dist/ をアーティファクトに保存
  ↓
deploy（手動実行）
  staging-*  タグ → deploy-staging  のボタンが表示
  production-* タグ → deploy-production のボタンが表示
```

### GitLab CI/CD 変数

| 変数名 | 用途 |
|---|---|
| `$FTP_USERNAME` | FTPユーザー名 |
| `$FTP_PASSWORD` | FTPパスワード |
| `$FTP_HOST` | FTPホスト |
| `$FTP_PATH` | 本番デプロイ先パス |
| `$FTP_STAGING_PATH` | ステージングデプロイ先パス |

> **注意**: GitLab CI/CD 変数は **Protected をオフ** にすること。
> Protected 変数はProtectedブランチ・タグにしか渡されないため、
> 通常のタグpushでは変数が空になりデプロイが失敗する。

---

## デプロイ手順

### 1. コミット・プッシュ

```bash
git add .
git commit -m "コミットメッセージ"
git push gitlab main && git push origin main
```

### 2. タグを作成してプッシュ

| 環境 | タグ形式 | 例 |
|---|---|---|
| ステージング | `staging-yyyymmdd-n` | `staging-20260219-1` |
| 本番 | `production-yyyymmdd-n` | `production-20260219-1` |

タグ名の末尾には自由に文字列を追加できる（例: `staging-20260219-1-hotfix`）。

```bash
# タグ作成（-a でメッセージ付きアノテーションタグ）
git tag -a staging-20260219-1 -m "メッセージ"

# GitLabとGitHubの両方にプッシュ
git push gitlab staging-20260219-1 && git push origin staging-20260219-1
```

### 3. GitLabでデプロイを手動実行

1. GitLab のパイプライン画面を開く
2. `test` → `build` が完了するのを待つ
3. `deploy-staging` または `deploy-production` の実行ボタンを押す
