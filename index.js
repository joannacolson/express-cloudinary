require('dotenv').config();
var express = require('express');
var ejsLayouts = require('express-ejs-layouts');
var cloudinary = require('cloudinary');
var multer = require('multer');
var upload = multer({ dest: './uploads/' });

var app = express();

app.set('view engine', 'ejs');
app.use(ejsLayouts);

app.get('/', function(req, res) {
    res.render('index');
});

app.post('/', upload.single('myFile'), function(req, res) {
    cloudinary.uploader.upload(req.file.path, function(result) {
        // Callback function after the upload finished
        res.send(result);
    });
});
app.listen(3000);
