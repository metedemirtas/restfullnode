var express= require('express');
var mongoose = require('mongoose');
var uriUtil = require('mongodb-uri');
var bodyParser = require('body-parser');

//MongoDB

var options = { server: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } }, 
                replset: { socketOptions: { keepAlive: 1, connectTimeoutMS : 30000 } } };       
 
var mongodbUri = 'mongodb://kerem:azxBr12!@ds059651.mongolab.com:59651/firstdb';
var mongooseUri = uriUtil.formatMongoose(mongodbUri);

var conn = mongoose.connection;             
conn.on('error', console.error.bind(console, 'connection error:'));  
conn.once('open', function() {
	console.log('connected' + mongoose.connection.readyState);
});

mongoose.connect(mongooseUri);

//Express
var app= express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//Routes
app.use('/api',require('./routes/api'));

app.listen(3000);
console.log('server is running on port 3000');