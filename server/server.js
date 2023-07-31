const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const User = require('./models/user')
const Card = require('./models/card')
const bcrypt = require('bcryptjs')
const cors = require('cors');
const jwt = require('jsonwebtoken')

// Please store this in env variables, im tired to do this rn
JWT_SECRET = 'SDF@#$SDFKJSDFS@#$DKFJSHD@#$FK'

mongoose.connect('mongodb://localhost:27017/loginDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

const app = express()
app.use(cors())
app.use('/', express.static(path.join(__dirname, 'static')))
app.use(bodyParser.json())

app.post('/api/login', async (req, res) => {
  console.log(req.body);

  const { username, password } = req.body;

  const user = await User.findOne({ username }).lean();


  if (!user) {
    return res.json({ status: 'error', error: 'Invalid username/password' })
  }

  if (await bcrypt.compare(password, user.password)) {

    // Note, tokens are all publically available
    const token = jwt.sign({
      id: user._id,
      username: user.username
    },
      JWT_SECRET

    )

    return res.json({ status: 'ok', data: '' })
  }

  res.json({ status: 'error', error: 'Invalid username/password' })
})


app.post('/api/register', async (req, res) => {
  console.log(req.body);

  const { username, password: plaintextPassword, email } = req.body;

  if (!username || typeof username !== 'string') {
    return res.json({ status: 'error', error: 'Invalid Username' })
  }

  if (!plaintextPassword || typeof plaintextPassword !== 'string') {
    return res.json({ status: 'error', error: 'Invalid Password' })
  }

  if (plaintextPassword.length < 5) {
    return res.json({ status: 'error', error: 'Invalid Password (Must be length greater than 5)' })
  }

  password = await bcrypt.hash(plaintextPassword, 3);

  try {
    const response = await User.create({
      username,
      password,
      email
    })
    console.log("User successfully created: ", response)
  } catch (error) {
    if (error.code == 11000) {
      return res.json({ status: 'error', error: "Username already exists" })
    }
    console.log(JSON.stringify(error))
    return res.json({ status: 'error' })
  }


  res.json({ status: 'ok' })
})

app.get('api/cards/:id', async (req, res) => {

});

app.post('api/card', async (req, res) => {
  console.log(req.body);

  const { setId, id, front, back } = req.body;

  try {
    const res = await Card.create({
      setId,
      id,
      front,
      back
    });
    console.log("Card created: ", res);
  } catch (error) {
    console.log(JSON.stringify(error));
    return res.json({ status: 'error' });
  }

  res.json({ status: 'ok' })
})

app.listen(9999, () => {
  console.log('Server up at 9999')
})

