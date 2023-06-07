const Router = require("express").Router();
const controller = require("../controllers/bikeController");

Router.post("/", controller.createBike);
Router.get("/", controller.getBikes);
Router.get("/:id", controller.getBikeById);
Router.put("/:id", controller.updateBike);
Router.delete("/:id", controller.deleteBike);

module.exports = Router;
