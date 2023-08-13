const mongoose = require('mongoose')
const DeckModel = require('./deck')

const UserSchema = new mongoose.Schema({
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    email: {type: String, required: true},
    decks: {type: mongoose.Schema.Types.ObjectId, ref: 'Deck'},
    },
    {
        collection: 'users'
    }
)

const model = mongoose.model('UserSchema', UserSchema)

module.exports = model
