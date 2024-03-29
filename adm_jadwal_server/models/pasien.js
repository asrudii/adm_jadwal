const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PasienSchema = new Schema({
    rm : Number,
    nama : String,
    usia : Number,
    diagnosa : String,
    penunjang : String,
    pasiendari : String,
    telp : Number, 
    Ket : String,
    tanggal : Date,
    status : String
});

const Pasien = mongoose.model('Pasien', PasienSchema);

module.exports = Pasien;