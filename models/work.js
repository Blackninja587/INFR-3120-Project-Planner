var mongoose = require('mongoose');
// create an assignment model
let workModel = mongoose.Schema({
    assignment: String,
    class: String,
    description: String,
    due_date: String,
    professor: String,
    },
    {
        collection: "Assignments"
    }
);
module.exports = mongoose.model('Work', workModel);
