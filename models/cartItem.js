const { Schema } = require("mongoose");

const cartItemSchema = new Schema(
    {
        bicycleID: { type: Schema.Types.ObjectId, ref: 'Bike', require: true },
        accessoryID: { type: Schema.Types.ObjectId, ref: 'Accessory', require: true },
        quantity: { type: Number, require: true },
    },

    { timestamps: true }
);

module.exports = cartItemSchema;
