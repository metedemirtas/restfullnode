//Dependency
var express = require("express");
var router = express.Router();

//models
var Product = require('../models/product');

Product.methods(['get','put','post','delete']);

Product.register(router,'/products');

/*
router.get('/products',function(req,res){
   res.send('api is working');
});
*/


module.exports = router;

