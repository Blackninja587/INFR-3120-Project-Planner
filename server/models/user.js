let mongoose = require('mongoose');
let passportLocalMongoose = require('passport-local-mongoose');

let User = mongoose.Schema({
    username: {
        type: String,
        default: "",
        trim: true,
        required: 'Username is Required'
    },
    /*
    password: {
        type: String,
        default: "",
        trim: true,
        required: "Password is Required"
    },*/
    displayName: {
        type: String,
        default: "",
        trim: true,
        required: "Display Name is Required"
    },
    created: {
        type: Date,
        default: Date.now
    },
    update: {
        type: Date,
        default: Date.now
    }
    
},
{
    colection: "users"
})

// Configuring the User Model Options
let options = ({MissingPasswordError: "Wrong or Missing Password"});
User.plugin(passportLocalMongoose, options);
module.exports.User = mongoose.model('User', User)
