var md5 = require('md5');
var db = require('../db.js');

module.exports.login = function(req,res){
    res.render('auth/login.pug');
};

module.exports.postLogin = function(req, res){
    var email = req.body.email;
    var password = req.body.password;

    var user = db.get('users').find({email: email}).value();
    
    if(!user){
        res.render('auth/login.pug', {
            errors: [
                'User does not exist.' 
            ],
            values: req.body
        });
        return;
    }

    var hashedPassword = md5(password);
    
    if(user.password !== hashedPassword){
        res.render('auth/login.pug',{
            errors: [
                'Wrong password.' 
            ],
            values: req.body
        });
        return;

    }
    res.cookie('userID', user.id, {
        signed: true
    });
    res.redirect('/users');
};
