/* For this assignment, I am using 3rd Party packages */
let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');
let session = require('express-session');
let passport = require('passport');
let passportLocal = require('passport-local');
let localStrategy = passportLocal.Strategy;
let flash = require('connect-flash');

// configure MongoDB 
let mongoose = require('mongoose');
let db = require('./db');

// pointing mongoose to DB URI
mongoose.connect(db.URI);
let mongoDB = mongoose.connection;
mongoDB.on('error', console.error.bind(console,'Connection Error'));
mongoDB.once('open', () => {
  console.log('Connected to MongodDB');
});

// creating a user model instance
let userModel = require('../models/user')
let User = userModel.User

// connecting to routing pages
let indexRouter = require('../routes/index');
let usersRouter = require('../routes/users');
let workRouter = require('../routes/work');

let app = express();

// initialising Passport
app.use(passport.initialize())
app.use(passport.session())

// initialising Flash
app.use(flash())

// view engine setup
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../../public')));
app.use(express.static(path.join(__dirname, '../../node_modules')));

// setting up Express Session
app.use(session({
  secret: 'password',
  saveUninitialized: false,
  resave: false
}))

// webpage url tags, to route to different pages
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/work', workRouter);

// implimenting User Authentication
passport.use(new localStrategy({
  usernameField: 'email',
  passwordField: 'password',
  session: false
  },
  function(username, password, done) {
    // ...
  }
));

// serialising and deserialising user information
passport.serializeUser(function(user, done) {
  done(null, user.id); 
});
passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
      done(err, user);
  });
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;