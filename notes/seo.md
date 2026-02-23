# SEO対応メモ

対象ファイル: `src/renderer/index.html`, `webpack.config.js`

---

## 対応済み内容

### 1. title / description のキーワード強化

検索ユーザーが使うキーワードを先頭に配置。Googleは約60文字で切り捨てるため、重要語を前方に置く。

```html
<title>テキスト変換・文字列置換ツール｜全角半角・改行削除 - Text Manipulator</title>
<meta name="description" content="全角/半角変換・改行削除・スペース削除・文字列置換をブラウザで即座に実行できる無料テキスト変換ツールです。コピペするだけで簡単に使えます。" />
```

### 2. canonical URL

重複URL（クエリパラメータ付きアクセスなど）によるSEOスコア分散を防ぐ。

```html
<link rel="canonical" href="https://miu-parts.work/text-manipulator/" />
```

### 3. OGP画像 (og:image)

SNSでシェアされたときにサムネイルを表示する。`src/assets/ogp.jpg` をビルド時に `dist/ogp.jpg` へコピーするよう `webpack.config.js` を更新。

```html
<meta property="og:image" content="https://miu-parts.work/text-manipulator/ogp.jpg" />
```

```js
// webpack.config.js
new CopyWebpackPlugin({
  patterns: [
    { from: "public", to: "." },
    { from: "src/assets/ogp.jpg", to: "ogp.jpg" }, // 追加
  ],
}),
```

### 4. Twitter Card

X(Twitter)でシェアされたとき大きな画像カードで表示される。

```html
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="テキスト変換・文字列置換ツール｜全角半角・改行削除 - Text Manipulator" />
<meta name="twitter:description" content="全角/半角変換・改行削除・スペース削除・文字列置換をブラウザで即座に実行できる無料テキスト変換ツールです。コピペするだけで簡単に使えます。" />
<meta name="twitter:image" content="https://miu-parts.work/text-manipulator/ogp.jpg" />
```

### 5. JSON-LD 構造化データ

Googleにページの内容を構造化して伝える。リッチリザルト表示の候補になる。

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Text Manipulator",
  "url": "https://miu-parts.work/text-manipulator/",
  "description": "全角/半角変換・改行削除・スペース削除・文字列置換をブラウザで即座に実行できる無料テキスト変換ツールです。",
  "applicationCategory": "UtilitiesApplication",
  "operatingSystem": "Web",
  "inLanguage": "ja",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "JPY"
  }
}
</script>
```

---

## 対応しなかったこと・判断メモ

- **h1タグのキーワード化** → スマホ表示が長くなるため見送り。UIを変えずにSEO効果を得る手段として hidden テキストは検討したが、Googleのスパムポリシー違反になるため却下。
- **og:locale / og:site_name** → 未対応。優先度低。

---

## 確認ツール

- OGP確認: [OGP確認ツール（hrafnkell）](https://hrafnkell.com/ogp/)
- Twitter Card確認: [Card Validator](https://cards-dev.twitter.com/validator)
- JSON-LD確認: [Googleリッチリザルトテスト](https://search.google.com/test/rich-results)
- sitemap.xml / robots.txt: `public/` 以下に配置済み
