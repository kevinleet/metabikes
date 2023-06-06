const express = require("express");
const Router = express.Router();

const BikeRouter = require("./bikeRouter");
const AccesoryRouter = require("./accessoryRouter");

Router.use("/bikes", BikeRouter);
Router.use("/accessories", AccesoryRouter);

module.exports = Router;
