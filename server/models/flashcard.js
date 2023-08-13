const mongoose = require('mongoose');

const FlashCardSchema = new mongoose.Schema({
    question: { type: String, required: true },
    answer: { type: String, required: true },
}, {
    timestamps: true,
    collection: 'flashcards'
});

const FlashCardModel = mongoose.model('FlashCard', FlashCardSchema);

module.exports = FlashCardModel;
