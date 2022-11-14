const express = require('express');
const router = express.Router();
let indexController = require('../controller/index')

/* GET home page. */
router.get('/', indexController.displayHomePage);

module.exports = router;
