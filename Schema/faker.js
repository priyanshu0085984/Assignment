const mongoose = require('mongoose');

const FakerSchema = new mongoose.Schema({

})

const Faker = mongoose.model("Faker",FakerSchema);
module.exports = Faker;