## jest.memo

このファイルに jest のメモを記載していく。

<br />
<br />
<br />

## Jest, React Testing Libraryとは

### jest

- jestは、javascriptのテストフレームワーク基盤
- describe, test, it, expectなどの基本機能
- いろんなJSコードをテストできる

<br />

### React Testing Library

- Reactコンポーネントのためのテストツール
- Jestが基盤でその上に構築される
- render, screen, fireEventなどのReact専用機能

つまり、**Reactのためのjestの拡張機能みたいな感じ**

<br />

### インストール

```
$ npm install -D jest @testing-library/react @testing-library/jest-dom @testing-library/user-event @types/jest
```

<br />
<br />
<br />

## 環境構築

### 設定ファイルを作成する

```
# プロジェクトルートディレクトリ
touch jest.config.js
```

<br />

### 設定ファイルを書いていく

- jest.config.jsに、jestの設定を記載

```javascript
module.exports = {
  // https://jestjs.io/docs/configuration#testenvironment-string
  // 今回はWebアプリメインで考えて[jsdom]。ブラウザ艦橋をNode.jsで再現。
  // DOM操作（document.createElement等）が使える
  testEnvironment: "jsdom",

  // https://jestjs.io/docs/configuration#setupfilesafterenv-array
  // テストフレームワークのセットアップファイル
  // たぶん@testing-libraryを使う場合はこの設定ファイルをみるということか。
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"],

  // わからんけどエイリアスとかどっかで書いてた。
  moduleNameMapping: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
  },

  // https://jestjs.io/docs/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object
  // jestはコードをjavascriptとして実行するから、JSX、Typescriptなどはトランスパイルが必要。その変換をbabel-jestにするということか。
  // TypeScript(.tsx)ファイルをJestが理解できるように変換
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
  },

  // https://jestjs.io/docs/configuration#testmatch-arraystring
  // テスト範囲をしている？
  testMatch: ["**/__tests__/**/*.(js|jsx|ts|tsx)", "**/*.(test|spec).(js|jsx|ts|tsx)"],
};
```

<br />

### testing-libraryの設定ファイルを作成

```
# srcに作成
touch src/setupTests.js
```

`setupFilesAfterEnv` に記載のパス

<br />

### 内容を書いていく

```javascript
# @testing-library/jest-domでtoBeInTheDocument()等の便利なマッチャーが使える
import "@testing-library/jest-dom";
```
