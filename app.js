var express = require('express');
var path = require('path');
// var jade = require('jade');
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', function(req, res) {
	console.log('Start!');
	res.send('<h1>Oya!</h1>');
});

app.listen(3000);
console.log('Server is running on port 3000...')