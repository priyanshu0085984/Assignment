const mongoose = require('mongoose');

const PlaceSchema = new mongoose.Schema({
    latitude:String,
    longitude:String,
});

module.exports = mongoose.model('Place', PlaceSchema);