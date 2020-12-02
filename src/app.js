require('dotenv-safe').config()

const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express()

mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

let db = mongoose.connection;

db.on('error', console.log.bind(console, 'connection error'))
db.once('open', function (){
  console.log('Conexão feita com sucesso.')
})

const index = require('./routes/index')
const councilors = require('./routes/councilorsRoute')
const ideas = require('./routes/ideasRoute')

app.use(bodyParser.json());

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
    )
    next()
  })

app.use('/', index)
app.use('/vereadores', councilors)
// app.use('/ideias', ideas)

module.exports = app
