const mongoose = require('mongoose');

const CreditCardSchema = new mongoose.Schema({
    type:String,
    number:Number,
    expiration:String,
    owner:String
});

module.exports = mongoose.model('CreditCard', CreditCardSchema);