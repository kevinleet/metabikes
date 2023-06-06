const Router = require("express").Router();
const controller = require("../controllers/bikeController");

Router.get("/", controller.getBikes);
Router.get("/:id", controller.getBikeById);

module.exports = Router;
