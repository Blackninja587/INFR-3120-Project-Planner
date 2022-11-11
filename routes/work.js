let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let work = require('../models/work');

router.get('/', (req,res,next) =>{
    work.find((err, Assignments)=>{
        if(err)
        {
            return console.error(err);
        }
        else
        {
            res.render('work',{
                title: 'Assignments',
                Assignments: Assignments
            })
        }
    });
});
module.exports = router;