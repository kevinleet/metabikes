const db = require ('../db')
const {Bike} = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))