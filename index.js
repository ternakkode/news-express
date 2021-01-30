const express = require('express')
const routes = require('./routes/route.js')

const app = express()

app.use(routes)
app.use(express.static('public'))
app.set('view engine', 'ejs');

app.listen(3002)