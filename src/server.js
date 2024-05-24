const express = require("express");
const app = express();

const setupServer = () => {
  app.use("/", express.static(__dirname + "/frontend/public/dist"));
  app.use(express.json());

  app.get("/appliance", (req, res) => {});

  return app;
};

module.exports = { setupServer };
