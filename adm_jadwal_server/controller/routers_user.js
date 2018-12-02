const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');

router.use(bodyParser.json());

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
        created : hariIni
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

// Login Verifikasi 
router.post('/user', verifyToken, function(req, res){
    jwt.verify(req.token, 'secret', (err, authData) => {
        if(err) {
            res.sendStatus(403);
        }else {
            res.json({
                message: 'Post created....',
                authData
            })
        }
    });
});
// Login Token
router.post('/login', function(req, res){
    // ambil data user db
    // const userdata = () => { User.find({}).then(function(result){
    //         res.send(result)
    //     });
    // }  
    const user = {
        id: 1,
        username: 'rudi',
        email: 'asep@gmail.com'
    } 
    // membuat token
    jwt.sign({user}, 'secret', (err, token) => {
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
        // dipecah saat di jalan
        const bearer = bearerHeader.split(' ');
        // ambil token array
        const bearerToken = bearer[1];
        // set Token
        req.token = bearerToken;
        // next middleware
        next();
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