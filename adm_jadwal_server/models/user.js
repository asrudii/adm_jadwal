const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username : String,
    nama : String,
    email : String,
    password : String,
    created : Date
});

const User = mongoose.model('User', UserSchema);

module.exports = User;