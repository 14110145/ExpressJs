var db = require('../db.js');

module.exports.countCard = function(req, res, next){
    var sessionId = req.signedCookies.sessionId;
    res.locals.countCart = Object.values(db.get('sessions').find({id: sessionId}).get('cart').value());
    res.redirect('/products');
}