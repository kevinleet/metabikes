const Router = require("express").Router();
const controller = require("../controllers/accessoryController");

Router.get("/", controller.getAccessories);
Router.get("/:id", controller.getAccessoryById);
Router.delete("/:id", controller.deleteAccessory)

module.exports = Router;
