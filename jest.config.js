module.exports = {
  testEnvironment: "node", // jsdomは、テストファイルにコメントで設定するか？
  preset: "ts-jest", // typescript変換。import文が解決。
  testMatch: ["**/__tests__/**/*.test.ts"], // .test.ts のみマッチ
};
