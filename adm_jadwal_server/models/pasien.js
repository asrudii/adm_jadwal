const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PasienSchema = new Schema({
    rm : Number,
    nama : String,
    file : String
});

const Pasien = mongoose.model('Pasien', PasienSchema);

module.exports = Pasien;