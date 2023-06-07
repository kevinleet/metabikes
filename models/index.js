const mongoose = require("mongoose");
const bikeSchema = require("./bike");
const accessorySchema = require("./accessory");
const commentSchema = require("./comment");
const cartSchema = require("./cart");

const Bike = mongoose.model("Bike", bikeSchema);
const Accessory = mongoose.model("Accessory", accessorySchema);
const Comment = mongoose.model("Comment", commentSchema);
const Cart = mongoose.model("Cart", cartSchema);

module.exports = { Bike, Accessory, Comment, Cart };
