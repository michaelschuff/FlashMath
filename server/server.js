const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const User = require('./models/user')
const Deck = require('./models/deck')
const bcrypt = require('bcryptjs')
const cors = require('cors')
const jwt = require('jsonwebtoken')

// Please store this in env variables, im tired to do this rn
JWT_SECRET = 'SDF@#$SDFKJSDFS@#$DKFJSHD@#$FK'

mongoose.connect('mongodb://localhost:27017/loginDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

const app = express()
app.use(cors())
app.use('/', express.static(path.join(__dirname, 'static')))
app.use(bodyParser.json())

// Authentication middleware
function authenticateToken(req, res, next) {
  const token = req.headers['authorization']
  if (token == null) return res.sendStatus(401);

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

app.get('/api/user/:id', authenticateToken, async (req, res) => {
  try {
    const userId = req.user.id;
    const user = await User.findById(userId).select('username, email, decks').lean();
    if (!user) {
      return res.json({ status: 'error', error: 'User not found' });
    }
    res.json({ status: 'ok', data: user });
  } catch (error) {
    console.log(error);
    res.json({ status: 'error', error: 'An error occurred while fetching user data' });
  }

})

// app.get('/api/user/:id/decks', authenticateToken, async (req, res) => {
//   try {
//     const userId = req.user.id;
//     const user = await User.findById(userId).select('username, email, decks').lean();
//     if (!user) {
//       return res.json({ status: 'error', error: 'User not found' });
//     }
//     res.json({ status: 'ok', data: decks });
//   } catch (error) {
//     console.log(error);
//     res.json({ status: 'error', error: 'An error occurred while fetching user data' });
//   }

// })

app.get('/api/user/:id/decks', authenticateToken, async (req, res) => {
  try {
    const userId = req.user.id;

    // Fetch user's details
    const user = await User.findById(userId).select('username email decks').lean();

    if (!user) {
      return res.json({ status: 'error', error: 'User not found' });
    }

    // Fetch user's decks using the references
    const deckIds = user.decks || []; // Ensure that deckIds is an array
    const decks = await DeckModel.find({ _id: { $in: deckIds } }).populate('flashcards').lean();

    res.json({ status: 'ok', data: { user, decks } });

  } catch (error) {
    console.log(error);
    res.json({ status: 'error', error: 'An error occurred while fetching user data' });
  }
});


app.post('/api/login', async (req, res) => {
  console.log(req.body)

  const { username, password } = req.body

  const user = await User.findOne({ username }).lean()

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

    return res.json({ status: 'ok', data: token })
  }

  res.json({ status: 'error', error: 'Invalid username/password' })
})

app.post('/api/register', async (req, res) => {
  console.log(req.body);

  const { username, password: plaintextPassword, email } = req.body;

  if (!username || typeof username !== 'string') {
    return res.json({ status: 'error', error: 'Invalid Username' });
  }

  if (!plaintextPassword || typeof plaintextPassword !== 'string') {
    return res.json({ status: 'error', error: 'Invalid Password' });
  }

  if (plaintextPassword.length < 5) {
    return res.json({ status: 'error', error: 'Invalid Password (Must be length greater than 5)' });
  }

  const password = await bcrypt.hash(plaintextPassword, 3);

  try {

    
    const newDeck = new Deck({
      name: 'Default Deck',
      description: 'A default deck created when a new user is created',
      flashcards: [],
      createdBy: 'default',
    });

    // Save the new deck
    let savedDeck;
    try {
      savedDeck = await newDeck.save();
    } catch (saveError) {
      console.error('Error saving deck', saveError);
      return res.json({ status: 'error', error: 'Error saving deck' });
    }

   

    // Update the createdBy field of the saved deck with the user's ObjectId
    savedDeck.createdBy = newUser._id;
    await savedDeck.save();

    console.log('User successfully created:', newUser);
    console.log('Deck successfully associated:', savedDeck);
  } catch (error) {
    if (error.code === 11000) {
      return res.json({ status: 'error', error: 'Username already exists' });
    }
    console.log(JSON.stringify(error));
    return res.json({ status: 'error' });
  }

  res.json({ status: 'ok' });
});


app.get('/api/user/:id', async (req, res) => {
  try {
    const user = await User.findById(userId).select('username email').lean();
    if (!user) {
      return res.json({ status: 'error', error: 'User not found' });
    }
    res.json({ status: 'ok', data: user });
  } catch (error) {
    console.log(error);
    res.json({ status: 'error', error: 'An error occured while fetching user data' })
  }
});

app.listen(9999, () => {
  console.log('Server up at 9999');
});
