const { Schema } = require("mongoose");

const accessorySchema = new Schema(
    {
        type: { type: Schema.Types.ObjectId, ref: 'Bike'},
        brand: { type: String, require: true },
        item: { type: String, require: true },
        price: { type: Number, require: true },
        img: { type: String, require: true },
        description: { type: String, require: true },
    },
    { timestamps: true }
);

module.exports = accessorySchema;
