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
        // creates a new collection, "Assignments"
        collection: "Assignments"
    }
);
module.exports = mongoose.model('Work', workModel);
