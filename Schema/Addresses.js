const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
    id:Number,
    street: String,
    streetName:String,
    buildingNumber:String,
    city: String,
    zipCode: String,
    country: String,
    county_code: String,
    latitude: String,
    longitude: String
});

module.exports = mongoose.model('Address', addressSchema);