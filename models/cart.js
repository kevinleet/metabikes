const { Schema } = require("mongoose");

const cartSchema = new Schema(
    {
        itemID: { type: String, require: true },
        quantity: { type: String, require: true },
    },

    { timestamps: true }
);

module.exports = cartSchema;
