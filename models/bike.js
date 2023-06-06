const  { Schema } = require('mongoose')

const bikeSchema = new Schema (
    {
        type: {type: String, require: true},
        brand: {type: String, require: true},
        price: {type: String, require: true},
        quantity: {type: Number, require: true},
        frame_size: {type: String, require: true}
    

    },
    {timestamps: true}
)

module.exports = bikeSchema