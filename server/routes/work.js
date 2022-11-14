let express = require('express');
let router = express.Router();
let workController = require('../controller/work')

// GET route for the Work list
router.get('/',workController.displayAssignments)

// GET route for displaying the Add-page -- Create Operation
router.get('/add',workController.displayAddPage)

// POST route for displaying the Add-page -- Create Operation
router.post('/add',workController.renderAddPage)

// GET route for displaying the Edit operation -- Update Operation
router.get('/edit/:id',workController.displayEditPage)

// POST route for displaying the Edit operation -- Update Operation
router.post('/edit/:id',workController.renderEditPage)

// Delete Operation
router.get('/delete/:id',workController.deleteAssignments)


module.exports = router;