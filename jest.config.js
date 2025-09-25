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
