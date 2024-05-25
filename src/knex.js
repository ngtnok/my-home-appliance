const config = require("../knexfile")(config);
const knex = require("knex");

// const environment = process.env.DATABASE_URL ? "production" : "development";
// console.log("environment: ", environment);

module.exports = knex; //[environment];
