require('dotenv').config()
const express = require('express')
const cors = require('cors')
const {seed, submitOrder} = require('./controller/controller.js')

const { CONNECTION_STRING, SERVER_PORT } = process.env

const app = express()

app.use(express.json())
app.use(cors())

app.post('/seed', seed)

app.listen(SERVER_PORT, () => {
    console.log(`listening on ${SERVER_PORT}`)
})
