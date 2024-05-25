const express = require("express");
const app = express();
const knex = require("./knex");

const setupServer = () => {
  app.use("/", express.static(__dirname + "/frontend/public/dist"));
  app.use(express.json());

  const allowCrossDomain = function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    res.header(
      "Access-Control-Allow-Headers",
      "Content-Type, Authorization, access_token"
    );

    // intercept OPTIONS method
    if ("OPTIONS" === req.method) {
      res.send(200);
    } else {
      next();
    }
  };
  app.use(allowCrossDomain);

  app.get("/api/appliances", async (req, res) => {
    const appliance = await knex.select().from("appliance");
    res.status(200).send(appliance);
  });
  app.post("/api/appliances", async (req, res) => {
    const { category, maker, appliance_name } = req.body;
    const getAlreadySameName = await knex
      .select()
      .from("appliance")
      .where("appliance_name", appliance_name);
    // console.log("already", getAlreadySameName);
    if (!getAlreadySameName.length) {
      console.log("is not already");
      await knex
        .insert({ category, maker, appliance_name }, ["id"])
        .into("appliance");
      const newAppliance = await knex
        .select()
        .from("appliance")
        .where("appliance_name", appliance_name)
        .first();
      res.status(201).send(newAppliance);
    }
    res.status(400).send();
  });

  return app;
};

module.exports = { setupServer };
