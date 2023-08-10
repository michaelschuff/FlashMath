const mongoose = require('mongoose');

const DeckSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    flashcards: [{ type: mongoose.Schema.Types.ObjectId, ref: 'FlashCard' }],
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    // You can add more fields as needed
}, {
    timestamps: true,
    collection: 'decks'
});

const DeckModel = mongoose.model('Deck', DeckSchema);

module.exports = DeckModel;
