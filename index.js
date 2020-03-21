require('dotenv').config();

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var shortid = require('shortid');
var authMiddleware = require('./middlewares/auth.middleware');
var sessionMiddleware = require('./middlewares/session.middlware');
var cartCountMiddleware = require('./middlewares/cartCount.middleware');
var mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL);

var userRoute = require('./routes/user.route');
var authRoute = require('./routes/auth.route');
var productRoute = require('./routes/product.route');
var cartRoute = require('./routes/cart.route');
var apiProductRoute = require('./api/routes/product.route')

var db = require('./db');

var port = 3000;

app.set('view engine', 'pug');
app.set('views', './views');
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use('/api/products',apiProductRoute);
app.use(express.static('public'));
app.use(cookieParser(process.env.SESSION));
app.use(sessionMiddleware);

app.use('/auth', authRoute);
app.use('/users', authMiddleware.requireAuth , userRoute);
app.use('/products', productRoute);
app.use('/cart', cartRoute ,cartCountMiddleware.countCard);

app.get('/', function(req , res){
    res.render('index.pug',{
        name: 'Lam Phu'
    });
});

app.listen(port, function(){
    console.log('Example app listening on port' + port);
});