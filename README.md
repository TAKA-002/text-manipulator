<p align="center">
  <img src="src/assets/icon.png" alt="Text Manipulator Logo" width="100" height="100">
</p>
<h1 align="center">Text Manipulator</h1>
<p align="center">
  テキスト操作タスクを実行できる、ElectronとReactベースのWEBアプリケーション・デスクトップアプリケーション
</p>

<br />

## 概要

Text Manipulatorは、テキスト編集作業を効率的に行い、生産性を向上させることを目的としています。直感的に使用でき、テキスト操作を簡単に行うことができます。

<br />

## ウェブアプリケーション

Text Manipulatorのウェブ版は以下のURLでアクセスできます。

[https://miu-parts.work/text-manipulator/](https://miu-parts.work/text-manipulator/)

<br />

## 機能

Text Manipulatorは以下の主要機能を提供します：

- **テキスト置換**
  - 入力欄に記載したテキストから任意の文字列を置換することができます。変更後のテキストを指定しなければ削除も可能です。
- **テキストから改行、スペースを除去**
  - 入力欄に記載したテキストから改行とスペースを除去したテキストを瞬時に作成できます。
- **変換方向の切り替え**
  - 変換対象でチェックした対象をすべて、全角または半角へ変換。またラジオボタンの切り替えに伴い瞬時に変更が反映されます。
- **変換対象の選択**
  - 変換対象チェックボックスの切り替えに反応し、瞬時に結果を反映させます。
- **ショートカットの使用による効率的な連続使用**
  - コピー、入力エリアクリアは、キーボードショートカットを使用することで、同じ設定で連続してテキスト操作を実行可能です。

<br />

## インストール

Text Manipulatorをローカルでアプリ生成するには、以下の手順に従ってください。

### 前提条件

- Node.js(バージョン v20.11.1)
- npm (通常Node.jsと一緒にインストールされます)
- Git

### 手順

- リポジトリをクローンします：

```
git clone https://github.com/TAKA-002/text-manipulator.git
cd text-manipulator
```

- 必要な依存パッケージをインストールします：

```
npm install
```

- アプリをビルドします。

```
npm run build
```

- アプリケーションを生成します。

《 intel Macの場合 》

```
npm run package-mac-intel
```

《 M系 Macの場合 》

```
npm run package-mac-m
```

生成された「Text Manipulator.app」を「アプリケーションフォルダ」に移動してご使用ください。

<br />

## 依存パッケージとライセンス

このプロジェクトは以下のライセンスを持つ依存パッケージを使用しています。

<br />

主要な依存パッケージ：
- [React](https://reactjs.org/) - MITライセンス
- [Electron](https://www.electronjs.org/) - MITライセンス

<br />

すべての依存パッケージとそのライセンスの完全なリストについては、`package.json`ファイルを参照してください。

<br />

## ライセンス

このプロジェクトはMITライセンスの下で公開されています。

---

Text Manipulatorを使用していただき、ありがとうございます！
