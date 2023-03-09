const mongoose = require('mongoose');

const PersonSchema = new mongoose.Schema({
    id:Number,
    firstname:String,
    lastname:String,
    email:String,
    phone:String,
    birthday:String,
    gender:String,
    address:{
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
    },
    website:String,
    image:String
});

module.exports = mongoose.model('Person', PersonSchema);