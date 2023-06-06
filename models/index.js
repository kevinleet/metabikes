const mongoose = require("mongoose");
const bikeSchema = require("./bike");
const accessorySchema = require("./accessory");

const Bike = mongoose.model("Bike", bikeSchema);
const Accessory = mongoose.model("Accessory", accessorySchema);

module.exports = { Bike, Accessory };
