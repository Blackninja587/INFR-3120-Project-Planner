let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
const work = require('../models/work');

// Connect with Work model
let Work = require('../models/work');

// CrUD Operation

// Read operation 
// GET route for the Work list

router.get('/', (req,res,next) =>{
    Work.find((err, Assignments)=>{
        if(err)
        {
            return console.error(err);
        }
        else
        {
            res.render('assignments/work-list',{
                title: 'Assignments',
                Assignments: Assignments
            });
        }
    });
});


// Add operation


// GET route for displaying the Add-page -- Create Operation
router.get('/add', (req,res,next) =>{
    res.render('assignments/add', {
        title: 'Add Assignment'
    });
});

// POST route for displaying the Add-page -- Create Operation
router.post('/add', (req,res,next) =>{
    let newAssignment = Work ({
    "assignment": req.body.assignment,
    "class": req.body.class,
    "description": req.body.description,
    "due_date": req.body.due_date,
    "professor": req.body.professor
    });
    Work.create(newAssignment,(err,Work) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('assignments/work-list');
        }
    });
});


// Edit operation


// GET route for displaying the Edit operation -- Update Operation
router.get('/edit/:id', (req,res,next) =>{
    let id = req.params.id;
    Work.findById(id,(err,workToEdit) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('assignments/edit', {
                title: 'Edit Assignment', 
                work: workToEdit
            });
        }
    });
});

// POST route for displaying the Edit operation -- Update Operation
router.post('/edit/:id', (req,res,next) =>{
    let id = req.params.id;
    let updateWork = Work ({
        "_id": id,
        "assignment": req.body.assignment,
        "class": req.body.class,
        "description": req.body.description,
        "due_date": req.body.due_date,
        "professor": req.body.professor
    });
    Work.updateOne({_id:id}, updateWork,(err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('assignments/work-list');
        }
    });
});


// Delete Operation
router.get('/delete/:id', (req,res,next) =>{
    let id = req.params.id;
    Work.remove({_id:id}, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('assignments/work-list');
        }
    });
});


module.exports = router;