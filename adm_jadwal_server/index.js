const express = require('express');
const app = express(); 
const bodyParser = require('body-parser');
const routers = require('./controller/routers');
const user = require('./controller/routers_user');
const mongoose = require('mongoose');
const cors = require('cors');
const crypto = require('crypto');
const path = require('path');
const multer = require('multer');
const upload = multer({dest : 'upload/'});
const GridFsStorage = require('multer-gridfs-storage');
const Grid = require('gridfs-stream');
const methodOverride = require('method-override');

// mongodb connection
mongoose.connect('mongodb://localhost:27017/app_admin', { useNewUrlParser: true });

mongoose.Promise = global.Promise;

// Init gfs
// let gfs;

// conn.once('open', function () {
// init stream
  // gfs = Grid(conn.db, mongoose.mongo);
  // gfs.collection('uploads');
// })

// Create storage engine
// const storage = new GridFsStorage({
//   url: 'mongodb://localhost:27017/app_admin',
//   file: (req, file) => {
//     return new Promise((resolve, reject) => {
//       crypto.randomBytes(16, (err, buf) => {
//         if (err) {
//           return reject(err);
//         }
//         const filename = buf.toString('hex') + path.extname(file.originalname);
//         const fileInfo = {
//           filename: filename,
//           bucketName: 'uploads'
//         };
//         resolve(fileInfo);
//       });
//     });
//   }
// });
// const upload = multer({ storage });



// body-parser 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.use(methodOverride('_method'));
app.use(cors());

// router
app.use('/api',routers);
app.use('/api',user);

// Upload route
app.post('/api/upload', upload.single('photo'), (req, res) => {
  console.log(req.file);
  res.json('file diapload');
});

app.get('/', (req, res) => { 
  res.send('Hello gan');
}); 

app.listen(4000, () => console.log("server berjalan pada http://localhost:4000"))