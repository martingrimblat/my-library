const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    author: {
        type: String,
        trim: true,
        required: [true, 'Please add the author']
    },
    title: {
        type: String,
        trim: true,
        required: [true, 'Please add the title']
    },
    publisher: {
        type: String,
        trim: true,
        required: [true, 'Please add the publisher']
    },
    read: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Book', BookSchema);