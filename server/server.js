const express = require('express')
const path = require('path')

const balanceRoutes = require('./routes/balance')
const orderRoutes = require('./routes/orders')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/balance', balanceRoutes)
server.use('/api/v1/orders', orderRoutes)

module.exports = server
