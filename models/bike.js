const  { Schema } = require('mongoose')

const bikeSchema = new Schema (
    {
        type: {type: String, require: true},
        brand: {type: String, require: true},
        model: {type: String, require: true},
        price: {type: Number, require: true},
        colot: {type: String, require: true},
        weight: {type: Number, require: true},
        description: {type: String, require: true},
        immage: {type: String, require: true},
    },

    {timestamps: true}
)

module.exports = bikeSchema