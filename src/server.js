const express = require("express");
const app = express();
const knex = require("./knex");

const setupServer = () => {
  app.use(
    "/",
    express.static(
      __dirname.split("/").slice(0, -1).join("/") + "/frontend/dist"
    )
  );
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
    const appliance = await knex
      .select()
      .from("appliance")
      // .orderBy("use_at")
      .orderBy("id");
    res.status(200).send(appliance);
  });
  app.get("/api/appliances/:id", async (req, res) => {
    const appliance = await knex
      .select()
      .from("appliance")
      .where("id", req.params.id);
    // .first();
    if (appliance.length) {
      return res.status(200).send(appliance[0]);
    }
    res.status(404).send();
  });
  app.post("/api/appliances", async (req, res) => {
    const { use_at, maker, appliance_name } = req.body;
    const getAlreadySameName = await knex
      .select()
      .from("appliance")
      .where({ appliance_name });
    // console.log("already", getAlreadySameName);
    if (!getAlreadySameName.length) {
      // console.log("is not already");
      await knex
        .insert({ use_at, maker, appliance_name }, ["id"])
        .into("appliance");
      const newAppliance = await knex
        .select()
        .from("appliance")
        .where({ appliance_name })
        .first();
      res.status(201).send(newAppliance);
    }
    res.status(400).send();
  });
  app.patch("/api/appliances", async (req, res) => {
    const id = req.body.id;
    const {
      use_at,
      maker,
      appliance_name,
      purchase_date_type_date,
      warranty_period,
    } = req.body;
    if (!!use_at) {
      await knex("appliance").where({ id }).update({ use_at });
    }
    if (!!maker) {
      await knex("appliance").where({ id }).update({ maker });
    }
    if (!!appliance_name) {
      await knex("appliance").where({ id }).update({ appliance_name });
    }
    if (!!purchase_date_type_date) {
      await knex("appliance").where({ id }).update({ purchase_date_type_date });
    }
    if (!!warranty_period) {
      await knex("appliance").where({ id }).update({ warranty_period });
    }
    const updateData = await knex("appliance").where({ id }).select();
    res.status(200).send(updateData[0]);
    // res.end();
  });
  app.delete("/api/appliances", async (req, res) => {
    const { id } = req.body;
    // console.log("id: ", id);
    // console.log("appliance_name: ", appliance_name);
    const deleteTarget = await knex("appliance").select().where({ id });
    if (!deleteTarget.length) {
      return res.status(404).send();
    }
    await knex("appliance").where({ id }).first().del();
    res.status(204).send();
  });

  return app;
};

module.exports = { setupServer };
