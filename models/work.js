let mongoose = require('mongoose');
// create an assignment model
let workModel = mongoose.Schema({
    professor: String,
    class: String,
    assignment: String,
    due_date: String,
    description: String,
    },
    {
        collection: "Assignments"
    }
);
module.exports = mongoose.model('Work', workModel);
