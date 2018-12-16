const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const bcrypt = require('bcrypt');


router.get('/user', function(req, res){
    User.find({}).then(function(result){
        res.send(result); 
    })
});

// Register
router.post('/register', function(req, res) {
    const hariIni = new Date()
    const userData = {
        username : req.body.username,
        nama : req.body.nama,
        email : req.body.email,
        password : req.body.password,
        created : hariIni,
    }
    
    User.findOne({
        email : req.body.email
    })
    .then(user => {
        if (!user) {
            bcrypt.hash(req.body.password, 10, (err, hash) => {
                userData.password = hash
                User.create(userData)
                .then(user => {
                    res.json({ status: user.email + ' teregistrasi'})
                })
                .catch(err => {
                    res.send('error: ' + err)
                })
            })
        }else {
            res.json({ error: 'user sudah ada'})
        }
    })
})

// Butuh akses token
router.get('/user', (req, res) => {
    var decoded = jwt.verify(req.header['authorization'], 'asepGanteng')
    
    User.findOne({
        _id: decoded._id
    })
    .then(user => {
        if (user) {
            res.json(user)
        }else {
            res.send("user tidak ditemukan")
        }
    })
    .catch(err => {
        res.send('error: ' + err)
    })
});

// Login Token
router.post('/login', (req, res) => {
    User.findOne({
        email: req.body.email
    })
    .then(user => {
        if(user) {
            if(bcrypt.compareSync(req.body.password, user.password)) {
                const payload = {
                    _id: user._id,
                    username: user.username,
                    nama: user.nama,
                    email: user.email,
                    level: user.level
                }
                let token = jwt.sign(payload, 'asepGanteng', {
                    expiresIn: 1440
                })
                res.send(token)
            }else{
                res.send("user tidak ditemukan")
            }
        }else {
            res.send("user tidak ditemukan")
        }
    })
    .catch(err => {
        res.send('error: ' + err)
    })
});


// // Fromat Token

// // Authorization : bearer <akses_token>

// // fungsi verfikasi
// function verifyToken(req, res, next) {
//     // Ambil auth header value
//     const bearerHeader = req.header['authorization'];
//     // check jika bearer undefined
//     if(typeof bearerHeader !== 'undefined') {
//         // dipecah saat di jalan
//         const bearer = bearerHeader.split(' ');
//         // ambil token array
//         const bearerToken = bearer[1];
//         // set Token
//         req.token = bearerToken;
//         // next middleware
//         next();
//     } else {
//         // forbidden
//         res.sendStatus(403);
//     }
// }


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