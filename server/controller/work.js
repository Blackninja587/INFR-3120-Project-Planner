let express = require('express');
let router = express.Router();
let Work = require('../models/work');

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
                Assignments: Assignments
            });
        }
    });
};

module.exports.displayAddPage = (req,res,next) =>{
    res.render('assignments/add', {
        title: 'Add Assignment'
    });
};

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
            res.render('assignments/edit', {title: 'Edit Assignment', work: workToEdit});
        }
    });
};

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
            res.redirect('/work');
        }
    });
};