const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const User = require('../models/user');


router.get('/user', function(req, res){
    User.find({}).then(function(result){
        res.send(result); 
    })
});

// Login Verifikasi 
router.post('/user', verifyToken, function(req, res){
    res.json({
        message : 'post created ...'
    })
});
// Login Token
router.post('/login', function(req, res){
    // ambil data user db
    const userdata = () => { User.find({}).then(function(result){
            res.send(result)
        });
    }   
    // membuat token
    jwt.sign({userdata}, 'asepGanteng', (err, token) => {
        res.json({
            token
        });
    });
});
// Fromat Token

// Authorization : bearer <akses_token>

// fungsi verfikasi
function verifyToken(req, res, next) {
    // Ambil auth header value
    const bearerHeader = req.header['authorization'];
    // check jika bearer undefined
    if(typeof bearerHeader !== 'undefined') {

    } else {
        // forbidden
        res.sendStatus(403);
    }
}


router.put('/user/:id', function(req, res){
    User.findOneAndUpdate({username: req.params.id}, req.body).then(function(result){
        User.findOne({username: req.params.id}).then(function(user){
            res.send(user);
        });
    });
});

router.delete('/user/:id', function(req, res){
    User.findOneAndDelete({username: req.params.id}).then(function(result){
        res.send(result);
    });
});

module.exports = router;