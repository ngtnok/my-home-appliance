/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("appliance").del();
  await knex("appliance").insert([
    { category: "キッチン", maker: "SHARP", appliance_name: "ホットクック" },
    { category: "リビング", maker: "TOSHIBA", appliance_name: "テレビ" },
    { category: "キッチン", maker: "東芝", appliance_name: "冷蔵庫" },
  ]);
};
