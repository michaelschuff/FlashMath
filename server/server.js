const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const User = require('./models/user')

mongoose.connect('mongodb://localhost:27017/loginDB'), {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
}

const app = express()
app.use('/', express.static(path.join(__dirname, 'static')))
app.use(bodyParser.json())

app.post('/api/register', async(req, res) => {
  console.log(req.body)
  res.json({status: 'ok'})
})

app.listen(9999)
