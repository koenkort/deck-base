import mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    bookImage: {
        type: String,
        required: false
    }
})

module.exports = mongoose.model('Book', BookSchema);