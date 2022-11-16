//The router function uses express, so both need pulled and defined here
// indexcontroller is a variable made in the controller/index file
const express = require('express');
const router = express.Router();
let indexController = require('../controller/index')

// GET home page
router.get('/', indexController.displayHomePage);

module.exports = router;