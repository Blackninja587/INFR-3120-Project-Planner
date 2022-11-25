//The router function uses express, so both need pulled and defined here
// workcontroller is a variable made in the controller/work file
let express = require('express');
let router = express.Router();
let workController = require('../controller/work')

function requireAuth(req, res, next)
{
    if(!req.isAuthenticated())
    {
        return res.redirect('/login');
    }
    next();
}

// Routes to contoller for displaying Assignment page
router.get('/', workController.displayAssignments)

// Routes to controller for displaying Add page
router.get('/add', requireAuth, workController.displayAddPage)

// Routes to controller for rendering Add page
router.post('/add', requireAuth, workController.renderAddPage)

// Routes to controller for displaying Edit page
router.get('/edit/:id', requireAuth, workController.displayEditPage)

// Routes to controller for rendering Edit page
router.post('/edit/:id', requireAuth, workController.renderEditPage)

// Routes to controller for deleting
router.get('/delete/:id', requireAuth, workController.deleteAssignments)

module.exports = router;