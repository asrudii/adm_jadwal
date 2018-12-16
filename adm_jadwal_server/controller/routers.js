const express = require('express');
const router = express.Router();
const Pasien = require('../models/pasien');


router.get('/pasien', function(req, res){
    Pasien.find({}).then(function(result){
        res.send(result);
    })
});
router.get('/pasien/:id', function(req, res){
    Pasien.findOne({rm: req.params.id}).then(function(pasien){
        res.send(pasien);
    })
});

// simpan data
router.post('/pasien', function(req, res){
    // const {rm, nama, usia, diagnosa, penunjang, pasiendari, telp, ket} = req.body;
    const tglSekarang = new Date()
    const Status = 'B'
    const dataPasien = {
        rm : req.body.rm,
        nama : req.body.nama,
        usia : req.body.usia,
        diagnosa : req.body.diagnosa,
        penunjang : req.body.penunjang,
        pasiendari : req.body.pasiendari,
        telp : req.body.telp,
        ket : req.body.ket,
        tanggal : tglSekarang,
        status : Status
    }
    // save data
    Pasien.create(dataPasien)
        .then(function(result){
            res.send(result);
        });
});


router.put('/pasien/:id', function(req, res){
    Pasien.findOneAndUpdate({rm: req.params.id}, req.body).then(function(result){
        Pasien.findOne({rm: req.params.id}).then(function(pasien){
            res.send(pasien);
        });
    });
});

router.delete('/pasien/:id', function(req, res){
    Pasien.findOneAndDelete({rm: req.params.id}).then(function(result){
        res.send(result);
    });
});

module.exports = router;