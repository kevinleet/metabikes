const mongoose = require("mongoose");
const bikeSchema = require("./bike");
const accessorySchema = require("./accessory");
const commentSchema = require("./comment");
const cartItemSchema = require("./cartItem");

const Bike = mongoose.model("Bike", bikeSchema);
const Accessory = mongoose.model("Accessory", accessorySchema);
const Comment = mongoose.model("Comment", commentSchema);
const CartItem = mongoose.model("CartItem", cartItemSchema);

module.exports = { Bike, Accessory, Comment, CartItem };
