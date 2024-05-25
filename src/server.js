const express = require("express");
const app = express();
const knex = require("./knex");

const setupServer = () => {
  app.use("/", express.static(__dirname + "/frontend/public/dist"));
  app.use(express.json());

  app.get("/api/appliances", async (req, res) => {
    const appliance = await knex.select().from("appliance");
    res.status(200).send(appliance);
  });

  return app;
};

module.exports = { setupServer };
