/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("appliance").del();
  await knex("appliance").insert([
    {
      use_at: "キッチン",
      maker: "SHARP",
      appliance_name: "ホットクック",
      // purchase_date: 1637366400000,
      warranty_period: 1,
      purchase_date_type_date: "2021-11-20",
    },
    { use_at: "リビング", maker: "TOSHIBA", appliance_name: "テレビ" },
    {
      use_at: "キッチン",
      maker: "東芝",
      appliance_name: "冷蔵庫",
      // purchase_date: 1710891800000,
      warranty_period: 10,
      purchase_date_type_date: "2024-03-20",
    },
    {
      use_at: "キッチン",
      maker: "HITACH",
      appliance_name: "電子レンジ",
      // purchase_date: 1264819200000,
      purchase_date_type_date: "2010-01-30",
    },
  ]);
};
