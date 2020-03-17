var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var shortid = require('shortid');

var userRoute = require('./routes/user.route');
var db = require('./db');

var port = 3000;

app.set('view engine', 'pug');
app.set('views', './views');
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(express.static('public'))

app.get('/', function(req , res){
    res.render('index.pug',{
        name: 'Lam Phu'
    });
});
app.use('/users', userRoute);

app.listen(port, function(){
    console.log('Example app listening on port' + port);
});