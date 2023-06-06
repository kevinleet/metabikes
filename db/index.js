const mongoose = require('mongoose')
const { PASSWORD } = require('../config')

let MONGODB_URI = `mongodb+srv://kevinli617:${PASSWORD}@cluster0.yg9kt7s.mongodb.net/MetaBikes?retryWrites=true&w=majority`

mongoose
    .connect(MONGODB_URI)
    .then(() => {
        console.log('Successfully connected to remote MongoDB.')
    })
    .catch((e) => {
        console.log(`Connection Error: ${e.message}`)
    })

mongoose.set('debug', true)
mongoose.connection.on('error', console.error.bind(console, 'MongoDB Connection Error:'))

module.exports = mongoose.connection