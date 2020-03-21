// var db = require('../db');

// module.exports.index = function(req, res){
//     var page = parseInt(req.query.page) || 1; // n
//     var perPage = 8;
//     var start = (page - 1) * perPage;
//     var end = page * perPage;

//     var drop = (page -1)*perPage;
//     res.render('products/index.pug', {
//         // products: db.get('products').value().slice(start, end)
//         products: db.get('products').drop(drop).take(perPage).value(), // lodash
//         page: parseInt(page) 
//     });;
// }

var Product = require('../models/product.model');

// module.exports.index = function(req, res){
//     Product.find().then(function(products) {
//         res.render('products/index.pug', {
//             products: products
//         });
//     });
// };

module.exports.index = async function(req, res){
    var products = await Product.find();
        res.render('products/index.pug', {
            products: products
        });
};