const mongoose = require('mongoose');

const TextSchema = new mongoose.Schema({
    title:String,
    suthor:String,
    genre:String,
    context:String,
});

module.exports = mongoose.model('Text', TextSchema);