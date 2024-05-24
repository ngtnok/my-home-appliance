const config = require("../knexfile");
const knex = require("knex")(config);

const environment = process.env.DATABASE_URL ? "production" : "development";

module.exports = knex[environment];
