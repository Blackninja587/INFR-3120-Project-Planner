let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let Work = require('../models/work');

router.get('/', (req,res,next) =>{
    Work.find((err, Assignments)=>{
        if(err)
        {
            return console.error(err);
        }
        else
        {
            res.render('work',{
                title: 'Assignments',
                Assignments: assignments
            })
        }
    });
});
module.exports = router;