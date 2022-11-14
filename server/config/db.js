const mongoose = require('mongoose')
const url = `mongodb+srv://admin:BlackNinjafiveeightseven@base-cluster.nnrhjs8.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connect(url)
    .then( () => {
        console.log('Connected to MongoDB Atlas')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. n${err}`);
    });

module.exports = 
    {
        'URI' : 'mongodb+srv://admin:BlackNinjafiveeightseven@base-cluster.nnrhjs8.mongodb.net/?retryWrites=true&w=majority'
    };