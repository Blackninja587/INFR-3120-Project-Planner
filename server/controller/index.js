// As passport is needed for the authentication process, it is called at the beginning of the code
let passport = require("passport");
let userModel = require("../models/user");
let User = userModel.User;


// This controller exports the function displayHomePage to index.js, where the route extension is given
module.exports.displayHomePage = (req, res, next) => {
    res.render('index', {
      title: 'Home',
      displayName: req.user ? req.user.displayName: ''
    });
  };


// This controller exports the the login page if the person accesssing it is NOT a user, if they are, they are directed to the LoginPage
// If they ARE a user, they are directed to the Home Page /index.ejs
module.exports.displayLoginPage = (req, res, next) => {
  if(!req.user)
  {
    res.render('auth/login',
    {
      title: 'Login Page',
      message: req.flash('loginMessage'),
      displayName: req.user ? req.user.displayName: ''
    })
  }
  else
  {
    return res.redirect('/')
  }
};
// This controller handles processing error pages and the User login page. If successful, will take them to /work-list.ejs
module.exports.processLoginPage = (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    // is there a server error?
    if(err)
    {
      return next(err)
    }
    // is there a user error
    if(!user)
    {
      req.flash('loginMessage', 'AuthenticationError');
      return res.redirect('/login');
    }
    req.login(user, (err) => {
      if(err)
      {
        return next(err)
      }
      return res.redirect('/work-list');
    })
  })(req, res, next)
};


// This controller is the same as displayLoginPage, but for the registration page
module.exports.displayRegisterPage = (req, res, next) => {
  if(!req.user)
  {
    res.render('auth/register',
    {
      title: 'Registration Page',
      message: req.flash('registerMessage'),
      displayName: req.user ? req.user.displayName: ''
    })
  }
  else
  {
    return res.redirect('/')
  }
};
// This controller allows a user to put in their registration details to be used to enter the site
module.exports.processRegisterPage = (req, res, next) => {
  let newUser = new User({
    username: req.body.username,
    password: req.body.password,
    email: req.body.email,
    displayName: req.boy.displayName
  })
  User.registser(newUser, req.body.password, (err) => {
    if(err)
    {
      console.log('Error: Adding new user');
      if(err.name=="UserExistsError")
      {
        req.flash('registerMessage',
        'Registration Error: User Already Exists');
      }
      return res.render('auth/register',
      {
        title: 'Registration Page',
        message: req.flash('registerMessage'),
        displayName: req.user ? req.user.displayName: ''
      });
    }
    else
    {
      // if the registration is unsuccessful
      return passport.authenticate('local')(req, res, ()=> {
        res.redirect('work-list');
      })
    }
  })
};


// This controller logs the user out of the site
module.exports.performLogout = (req, res, next) => {
  req.logout(function(err) {
    if(err)
    {
      return next(err);
    }
  });
  res.redirect('/');
};