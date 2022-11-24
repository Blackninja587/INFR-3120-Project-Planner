//The router function uses express, so both need pulled and defined here
// userscontroller is a variable made in the controller/users file
let express = require('express');
const router = express.Router();
let usersController = require('../controller/users')

// GET users page
router.get('/', usersController.displayUsersPage);

module.exports = router;