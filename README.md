### 使用技術

- JavaScript
- React/vite
- express
- knex/psql
- mocha/chai/chai-HTTP

### うちの家電

### 概要

うちにある家電・電化製品を情報集約する

### 環境変数

DB_NAME
DB_USER

### コマンド一覧

| ディレクトリ      | command           | 実行内容                               | 元のコマンド                                                              |
| :---------------- | :---------------- | :------------------------------------- | :------------------------------------------------------------------------ |
| my-home-appliance | npm i             | 必要なパッケージのインストール         |                                                                           |
|                   | npm run dev       | バックエンドサーバー起動（開発モード） | nodemon ./src/index.js                                                    |
|                   | npm run test      | バックエンドサーバーテスト実行         | mocha test                                                                |
|                   | npm run start     | バックエンドサーバー起動               | node ./src/index.js                                                       |
|                   | npm run migration | マイグレーション実行                   | npx knex migrate:latest                                                   |
|                   | npm run seed      | シードデータ実行                       | npx knex seed:run                                                         |
| frontend          | npm i             | 必要なパッケージのインストール         |                                                                           |
| frontend          | npm run dev       | フロントエンドサーバー起動             | vite                                                                      |
| frontend          | npm run build     | ビルド                                 | vite build                                                                |
| frontend          | npm run lint      | linter 適用                            | eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0 |
| frontend          | npm run preview   |                                        | vite preview                                                              |

### 基本機能

- [x] 使っている場所ごとに表示する
- [x] 持ってる家電を登録できる
- [x] 登録した家電を削除できる
- [x] 登録した家電の名前を変更できる

### 追加機能

- [ ] 保証期間切れが迫っているアラートする
- [ ] ユーザー認証
- [x] デプロイ
- [ ] うちの家電リストを家族で共同編集できる

db:my-home-appliance
table: appliance

| column         | type       | option  |
| :------------- | :--------- | :------ |
| id             | increments | PK      |
| use_at         | string     |         |
| maker          | string     |         |
| appliance_name | string     | notNull |

カテゴリ
メーカー
型番号
（画像）
保証期間
買った店
購入時期
備考
（取説リンク）
