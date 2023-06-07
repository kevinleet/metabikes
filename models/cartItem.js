const { Schema } = require("mongoose");

const cartItemSchema = new Schema(
    {
        itemID: { type: Schema.Types.ObjectId, require: true },
        quantity: { type: Number, require: true },
    },

    { timestamps: true }
);

module.exports = cartItemSchema;
