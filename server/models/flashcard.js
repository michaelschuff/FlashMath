const mongoose = require('mongoose');

const FlashCardSchema = new mongoose.Schema({
    front: { type: String, required: true },
    back: { type: String, required: true },
}, {
    timestamps: true,
    collection: 'flashcards'
});

const FlashCardModel = mongoose.model('FlashCard', FlashCardSchema);

module.exports = FlashCardModel;
