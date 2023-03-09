const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    id: Number,
    uuid: String,
    firstname: String,
    lastname: String,
    username: String,
    password: String,
    email: String,
    ip: String,
    macAddress: String,
    website: String,
    image: String
});

module.exports = mongoose.model('User', UserSchema);