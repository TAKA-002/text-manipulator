# Changelog

このプロジェクトに対する顕著な変更はすべて、このファイルに記録します。

## [1.5.0] - 2026-02-27

### Added

- 大文字/小文字変換機能の追加
  - uppercase（すべて大文字）
  - lowercase（すべて小文字）

<br />
<br />

## [1.4.2] - 2026-02-21

### Fixed

- タイポを修正（Manipulater → Manipulator、ブウラウザ → ブラウザ、など）

<br />
<br />

## [1.4.1] - 2025-09-25

### Added

- Aboutリンクの追加
  - Aboutをクリックすると、modalにてアプリ情報を表示する

### Technical

- プラットフォーム別情報表示機能の実装
  - Electron環境とWeb環境の自動判定
  - 設定保存場所の詳細説明（デスクトップ版：PC専用フォルダ、Web版：ローカルストレージ）
  - lucide-reactアイコンライブラリの導入

### Fixed

- N/A

<br />
<br />

## [1.4.0] - 2025-09-22

### Added

- 設定管理ボタンの追加
  - デフォルト設定切換機能
  - 現在の設定を保存機能

### Technical

設定管理機能におけるデータの保存場所

- Mac Electronアプリ:　PCのストレージ
- Webアプリ:　Google Chromeなどのブラウザのローカルストレージ

### Fixed

- タブキーでのカーソル移動の順番を修正

<br />
<br />

## [1.3.4] - 2025-09-11

### Improved

- コードの型安全性を向上
- 内部コード品質の改善

### Technical

- TypeScriptへの移行
- TypeScript設定の厳格化
- コンポーネント構造の最適化

<br />
<br />

## [1.3.3] - 2025-05-11

### Technical

- GitLab CD/CI実装

<br />
<br />

## [1.3.2] - 2025-05-11

### Added

- N/A

### Changed

- フッタースタイル余白調整。

### Fixed

- N/A

<br />
<br />

## [1.3.1] - 2025-02-22

### Added

- N/A

### Changed

- フッターの追加。

### Fixed

- テキストエリアの最低限の高さ保持。その他スタイルの修正

<br />
<br />

## [1.3.0] - 2024-11-29

### Added

- N/A

### Changed

- コピー実施、入力フィールドクリアなどの通知を、アラートから1.5秒で自動消去されるトースト通知（画面上部）へ変更

### Fixed

- N/A

<br />
<br />

## [1.2.2] - 2024-11-8

### Added

- N/A

### Changed

- N/A

### Fixed

- 入力値をクリアにするボタンを押下、または、ショートカットキー押下で、置換エリアの入力値も削除
- httpでのclipboardのAPIが使用できない不具合を解消

<br />
<br />

## [1.2.0] - 2024-11-7

### Added

- テキスト置換機能

### Changed

- 入力欄、出力欄を可変に変更

### Fixed

- N/A

<br />
<br />

## [1.1.6] - 2024-09-26

### Added

- 初回公開リリース
- テキストから改行、スペースを除去する機能
- 全角/半角変換機能
- 変換対象選択機能
- キーボードショートカット機能（コピー、入力エリアクリア）

### Changed

- N/A

### Fixed

- N/A

<br />
<br />

## ウェブアプリケーション

Text Manipulatorのウェブ版は以下のURLでアクセスできます：

[https://miu-parts.work/text-manipulator/](https://miu-parts.work/text-manipulator/)
