require('dotenv').config()
const express = require('express')
const cors = require('cors')

const { CONNECTION_STRING, SERVER_PORT } = process.env

const app = express()

app.use(cors())
app.use(express.json())

app.listen(SERVER_PORT, () => {
    console.log(`listening on ${SERVER_PORT}`)
})
