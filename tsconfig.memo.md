```json
{
  "compilerOptions": {
    "target": "es2020", // モダンブラウザ対応
    "module": "esnext", // 既存プロジェクトがimport/exportなので、それを維持
    "jsx": "react-jsx", // react18を使用しているので、推奨される「React 17以降の新しい自動変換方式」を採用
    "strict": false, // 段階的移行のためにまず型は厳格じゃないようにする。一度移行したらtrueにする予定
    "noImplicitAny": true, // any型が暗黙的に使用されている箇所でエラーが出るようになる
    "strictNullChecks": true, // nullチェック
    "strictFunctionTypes": true, // 関数型の厳密なチェック
    "moduleResolution": "node", // TypeScriptがimportしたモジュールをどう探すかの設定。将来的にviteにバンドラーを切り替えたいので、nodeで。webpackなどのバンドラー向けに「bundler」設定もある。
    "allowJs": true, // .jsxと、.tsxの共存許可設定。trueだと許可される。falseだと拒否されるので、移行が完了するまでエラーになる可能性が高い。
    "esModuleInterop": true, // package.jsonにCommonJSを使用しているモジュールがあるので、これはtrue。とくにimport React from "react" で使っているので、esModuleInterop: true が必須。
    "skipLibCheck": true, // 外部ライブラリの型チェックをするか。外部ライブラリはすでにテストを重ねているものばかりだと思うので、改めてやる必要はないと思う。skipをするのでtrue。
    "noEmit": true // この設定で、typescriptは型チェックのみ実施するようになる。これがfalseだと、ファイル出力も行うことになり、outDirの設定が必要になる。
  },
  "include": ["src/**/*"], // TypeScriptがどのファイルを対象にするかを指定
  "exclude": ["node_modules", "dist", "release-builds*"] // TypeScriptの対象から除外するファイルを指定
}
```
