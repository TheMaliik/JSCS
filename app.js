var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongo = require ('mongoose');
var mongoConnection = require ("./config/mongoconnection.json");






const userRoutes = require('./routes/userRoutes.js');



mongo.connect(mongoConnection.url)
.then(
  () => {
    console.log("------------connected----------------")
})

var os = require ('os');



var products = require ('./routes/products.js');



var OSrOUTES = require('./routes/os.js')




var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();


app.set('view engine', 'twig');
app.set('views', path.join(__dirname, 'views')); 

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));




app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/os', OSrOUTES);
app.use('/products', products);

//Teeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeest User
app.use('/api', userRoutes); 
// Teeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeest User


app.use('*', (req, res) => {
  res.status(404).json({ error: 'Page not found' });
});



app.use(function(req, res, next) {
  next(createError(404));
});

app.use(function(err, req, res, next) {

  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};


  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
