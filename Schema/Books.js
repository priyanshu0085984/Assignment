const mongoose = require('mongoose');

const BookSchema = mongoose.Schema({
            id: Number,
            title: String,
            author: String,
            genre: String,
            description: String,
            isbn: String,
            image: String,
            published: String,
            publisher: String
})
module.exports = mongoose.model('Book', BookSchema);