const mongoose = require('mongoose')
const bikeSchema = require('./bike')



const Bike = mongoose.model('Bike', bikeSchema)