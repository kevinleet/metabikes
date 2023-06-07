const { Schema } = require("mongoose");

const commentSchema = new Schema(
    {
        name: { type: String, require: true },
        email: { type: String, require: true },
        description: { type: String, require: true },
    },

    { timestamps: true }
);

module.exports = commentSchema;
