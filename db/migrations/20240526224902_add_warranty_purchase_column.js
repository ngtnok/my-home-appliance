/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.alterTable("appliance", (t) => {
    t.dropColumn("category");
    t.integer("purchase_date");
    t.integer("warranty_period");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.alterTable("appliance", (t) => {
    t.string("category");
    t.dropColumn("purchase_date");
    t.dropColumn("warranty_period");
  });
};
