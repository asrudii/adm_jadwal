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
    const {rm, nama, gambar} = req.body;
    // save data
    Pasien.create(req.body)
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