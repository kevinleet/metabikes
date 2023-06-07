const Router = require("express").Router();
const controller = require("../controllers/cartItemController");

Router.post("/", controller.createCartItem);
Router.get("/", controller.getCartItems);
Router.get("/:id", controller.getCartItemsById);
Router.put("/:id", controller.updateCartItem);
Router.delete("/:id", controller.deleteCartItem);

module.exports = Router;
