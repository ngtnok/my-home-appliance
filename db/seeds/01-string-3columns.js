/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("appliance").del();
  await knex("appliance").insert([
    { use_at: "キッチン", maker: "SHARP", appliance_name: "ホットクック" },
    { use_at: "リビング", maker: "TOSHIBA", appliance_name: "テレビ" },
    { use_at: "キッチン", maker: "東芝", appliance_name: "冷蔵庫" },
  ]);
};
