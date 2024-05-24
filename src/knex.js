const config = require("../knexfile");
const knex = require("knex")(config);

const environment = process.env.DATABASE_URL ? "production" : "development";
console.log("environment: ", environment);

module.exports = knex[environment];
