# 注意：Loading...から画面切り替わりません
Zennサイト情報取得に使用していた外部APIがCORS対策したのでLoading...から画面が切り替わらない現象になっています。
自作APIを実装し回避するまでに画面を確認したい場合は、下記Chromeプラグインをご利用ください。  

Access Control-Allow-Origin - Unblock  
https://add0n.com/access-control.html

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
