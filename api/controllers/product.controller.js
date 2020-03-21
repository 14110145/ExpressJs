var Product = require('../../models/product.model');

// module.exports.index = function(req, res){
//     Product.find().then(function(products) {
//         res.render('products/index.pug', {
//             products: products
//         });
//     });
// };

module.exports.index = async function(req, res){
    var products = await Product.find();
        // res.render('products/index.pug', {
        //     products: products
        // });
    res.json(products);
};

module.exports.create = async function(req, res){
    var products = await Product.create(req.body);
    res.json(products);
};