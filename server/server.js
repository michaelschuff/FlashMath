const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const User = require('./models/user')
const Deck = require('./models/deck')
const FlashCard = require('./models/flashcard')

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

app.get('/api/user/:userId/decks/:deckId/flashcards', authenticateToken, async (req, res) => {
  try {
    const userId = req.user.id;
    const deckId = req.params.deckId;

    // Check if the deck belongs to the current user
    const deck = await Deck.findOne({ _id: deckId, createdBy: userId });
    if (!deck) {
      return res.json({ status: 'error', error: 'Deck not found or does not belong to the user' });
    }

    // Populate the flashcards array with the actual flashcard details
    await deck.populate('flashcards').execPopulate();

    res.json({ status: 'ok', data: deck.flashcards });
  } catch (error) {
    console.log('Error fetching flashcards:', error);
    res.json({ status: 'error', error: 'An error occurred while fetching flashcards' });
  }
});

app.post('/api/user/:userId/decks/:deckId/cards', authenticateToken, async (req, res) => {
  try {
    const userId = req.user.id;
    const deckId = req.params.deckId;
    const { front, back } = req.body;

    // Check if the deck belongs to the current user
    const deck = await Deck.findOne({ _id: deckId, createdBy: userId });
    if (!deck) {
      return res.json({ status: 'error', error: 'Deck not found or does not belong to the user' });
    }

    // Create a new card and add it to the deck's flashcards array
    const newCard = new FlashCard({ front, back });
    deck.flashcards.push(newCard);
    await deck.save();
    await newCard.save();
    res.json({ status: 'ok', data: newCard });
  } catch (error) {
    console.log('Error adding card:', error);
    res.json({ status: 'error', error: 'An error occurred while adding the card' });
  }
});


app.get('/api/user/:id/decks', authenticateToken, async (req, res) => {
  try {
    const userId = req.user.id;

    // Fetch user's details
    console.log("Fetching decks for user:", userId); // Add this line
    const decks = await Deck.find({ createdBy: userId }).populate('flashcards').lean();

    console.log("Fetched decks:", decks); // Add this line

    res.json({ status: 'ok', data: { decks } });
  } catch (error) {
    console.log('Error fetching decks:', error); // Add this line
    res.json({ status: 'error', error: 'An error occurred while fetching deck data' });
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
    const newUser = new User({
      username,
      password,
      email,
    });

    await newUser.save();

    const newDeck = new Deck({
      name: 'Default Deck',
      description: 'A default deck created when a new user is created',
      flashcards: [],
      createdBy: newUser._id,
    });

    try {
      savedDeck = await newDeck.save();
    } catch (saveError) {
      console.error('Error saving deck', saveError);
      return res.json({ status: 'error', error: 'Error saving deck' });
    }

    // UPDATE the createdBy field of the saved deck with the user's ObjectId

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
