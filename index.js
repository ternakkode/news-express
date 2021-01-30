const express = require('express')
const routes = require('./routes/route.js')

const app = express()

app.use(routes)
app.use(express.static('views'))
app.set('view engine', 'ejs');

app.listen(3002)