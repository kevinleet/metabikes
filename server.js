const express = require('express')
const routes = require('./routes')
const logger = require('morgan')
const db = require('./db')

const PORT = process.env.port || 3001
const app = express()

app.use(express.json())
app.use(logger('dev'))

// app.use('/api', routes)

app.listen(PORT, () => console.log(`Application is listening on port ${PORT}.`))