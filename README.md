# ~~⚠「Loading...」から画面切り替わりません~~
~~Zennサイト情報取得に使用していた外部APIがCORS対策したのでLoading...から画面が切り替わらない現象になっています。~~  

API実装しCORS解決しました。  
https://github.com/tomlle/zenn-trend-api

# ローカル環境で画面確認

```zsh
npm i
npm start
```

# 構成

React + TypeScript + TailwindCSS

# 環境構築

https://zenn.dev/jpn_asane/articles/d7f44682b74fdc

上記URLを参考に構築。`.eslintrc.js`に以下のルールを追加

```javascript
rules: {
  'react/function-component-definition': "off",
```
