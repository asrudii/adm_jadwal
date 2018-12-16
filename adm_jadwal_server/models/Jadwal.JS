const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Jadwal = new Schema({
    rm : Number,
    nama : String,
    usia : Number,
    diagnosa : String,
    penunjang : String,
    pasiendari : String,
    telp : Number, 
    Ket : String,
    tanggal : Date,
});

const Jadwal = mongoose.model('Jadwal', Jadwal);

module.exports = Jadwal;