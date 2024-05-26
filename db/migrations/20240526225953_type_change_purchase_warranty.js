/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema
    .alterTable("appliance", (t) => {
      t.dropColumn("purchase_date");
      t.dropColumn("warranty_period");
    })
    .alterTable("appliance", (t) => {
      t.bigint("purchase_date");
      t.bigint("warranty_period");
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema
    .alterTable("appliance", (t) => {
      t.dropColumn("purchase_date");
      t.dropColumn("warranty_period");
    })
    .alterTable("appliance", (t) => {
      t.integer("purchase_date");
      t.integer("warranty_period");
    });
};
