// モジュール拡張・グローバル宣言（画像、外部ライブラリなど）

declare module "*.png" {
  const value: string;
  export default value;
}
