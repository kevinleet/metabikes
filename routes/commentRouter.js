const Router = require("express").Router();
const controller = require("../controllers/commentController");

Router.post("/", controller.createComment);
Router.get("/", controller.getComments);
Router.get("/:id", controller.getCommentById);
Router.put("/:id", controller.updateComment);
Router.delete("/:id", controller.deleteComment);

module.exports = Router;
