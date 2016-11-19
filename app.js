var express = require('express');

var path = require('path');

var favicon = require('serve-favicon');

var logger = require('morgan');

var cookieParser = require('cookie-parser');

var bodyParser = require('body-parser');


var index = require('./routes/index');

var users = require('./routes/users');


var collections = require('./routes/collections');


var app = express();

var mongoose = require('mongoose');

require('dotenv').config();

// view engine setup
app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'ejs');



// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

app.use(logger('dev'));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));


app.use('/', index);

app.use('/users', users);



app.use('/collections', collections);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
// Use native Node promises

// connect to MongoDB
mongoose.Promise = global.Promise;
if (process.env.NODE_ENV === 'dev') {
	mongoose.connect('mongodb://localhost/collections')
 	 .then(() =>  console.log('connection to localhost-db successful'))
  		.catch((err) => console.error(err));
}else{
	mongoose.connect('mongodb://passle-db/collections')
 	 .then(() =>  console.log('connection to passle-db successful'))
  		.catch((err) => console.error(err));
}