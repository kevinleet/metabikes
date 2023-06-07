const express = require("express");
const Router = express.Router();

const BikeRouter = require("./bikeRouter");
const AccesoryRouter = require("./accessoryRouter");
const CommentRouter = require("./commentRouter");

Router.use("/bikes", BikeRouter);
Router.use("/accessories", AccesoryRouter);
Router.use("/comments", CommentRouter);

module.exports = Router;
