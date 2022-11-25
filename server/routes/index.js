//The router function uses express, so both need pulled and defined here
// indexcontroller is a variable made in the controller/index file
const express = require('express');
const router = express.Router();
let indexController = require('../controller/index')

// GET home page
router.get('/', indexController.displayHomePage);

// GET login page
router.get('/login', indexController.displayLoginPage);
// POST login page
router.post('/login', indexController.processLoginPage);

// GET registration page
router.get('/register', indexController.displayRegisterPage);
// POST registration page
router.post('/register', indexController.processRegisterPage);

// GET logout page
router.get('/logout', indexController.performLogout);

module.exports = router;