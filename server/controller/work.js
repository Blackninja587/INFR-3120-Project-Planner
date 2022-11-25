//Work is needed in this code, and is taken from ../models/work
let Work = require('../models/work');

// GET route for the Work list
module.exports.displayAssignments =  (req,res,next) =>{
    Work.find((err, Assignments)=>{
        if(err)
        {
            return console.error(err);
        }
        else
        {
            res.render('assignments/work-list',{
                title: 'Assignments',
                Assignments: Assignments,
                displayName: req.user ? req.user.displayName: ''
            });
        }
    });
};

// GET route for displaying the Add-page -- Create Operation
module.exports.displayAddPage = (req,res,next) =>{
    res.render('assignments/add', {
        title: 'Add an Assignment',
        displayName: req.user ? req.user.displayName: ''
    });
};

// POST route for displaying the Add-page -- Create Operation
module.exports.renderAddPage = (req,res,next) =>{
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
            res.redirect('/work');
        }
    });
};

// GET route for displaying the Edit operation -- Update Operation
module.exports.displayEditPage = (req,res,next) =>{
    let id = req.params.id;
    Work.findById(id,(err,workToEdit) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.render('assignments/edit', {
                title: 'Edit an Assignment', 
                work: workToEdit,
                displayName: req.user ? req.user.displayName: ''
            });
        }
    });
};

// POST route for displaying the Edit operation -- Update Operation
module.exports.renderEditPage =  (req,res,next) =>{
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
            res.redirect('/work');
        }
    });
};

// Delete Operation
module.exports.deleteAssignments = (req,res,next) =>{
    let id = req.params.id;
    Work.remove({_id:id}, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/work',);
        }
    });
};