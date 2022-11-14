let mongoose = require('mongoose');

// Assignment Scheme, layout and format of data table
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