const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const User = require('./models/user')
const bcrypt = require('bcryptjs')
const cors = require('cors'); // Add this line to import the cors middleware

mongoose.connect('mongodb://localhost:27017/loginDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

const app = express()
app.use(cors())
app.use('/', express.static(path.join(__dirname, 'static')))
app.use(bodyParser.json())

app.post('/api/register', async(req, res) => {
  console.log(req.body);

  const {username, password, email} = req.body;

  hashedPassword = await bcrypt.hash(password, 3);

  try {

  } catch {

  }


  res.json({status: 'ok'})
})

app.listen(9999, () => {
  console.log('Server up at 9999')
})
