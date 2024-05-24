/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("appliance").del();
  await knex("appliance").insert([
    { id: 1, category: "", maker: "", appliance_name: "rowValue1" },
    { id: 2, category: "", maker: "", appliance_name: "rowValue2" },
    { id: 3, category: "", maker: "", appliance_name: "rowValue3" },
  ]);
};
