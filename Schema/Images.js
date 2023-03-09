const mongoose = require('mongoose');

const ImageSchema = new mongoose.Schema({
    title:String,
    description:String,
    url:String,
});

module.exports = mongoose.model('Image', ImageSchema);