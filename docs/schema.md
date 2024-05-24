#うちの家電

- 基本機能
  - [ ] カテゴリ別に表示する
  - [ ] 持ってる家電を登録できる
  - [ ] 登録した家電を変更/削除できる
- 追加機能
  - [ ] 保証期間切れが迫っているアラートする
  - [ ] ユーザー認証
  - [ ] デプロイ
  - [ ] うちの家電リストを家族で共同編集できる

db:my-home-appliance
table: appliance

| column         | type       | option  |
| :------------- | :--------- | :------ |
| id             | increments | PK      |
| category       | string     |         |
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
