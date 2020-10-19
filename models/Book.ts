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
       type: Object,
    }
})

module.exports = mongoose.model('Book', BookSchema);