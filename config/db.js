// db.js
const { MongoClient } = require('mongodb')

async function main() {

    const uri = "mongodb+srv://admin:BlackNinjafiveeightseven@test-cluster.xmvlgpb.mongodb.net/?retryWrites=true&w=majority";

    const client = new MongoClient(uri);

    try {
        await client.connect();
        
        await listDatabases(client);

    } catch (e) {
        console.error(e);
    } finally {
        await client.close;
    }
}
main().catch(console.error);

async function listDatabases(client) {
    const databasesList = await client.db().admin().listDatabases();

    console.log('Databases: ');
    databasesList.databases.forEach(db => {
        console.log(`- ${db.name}`);
    })
}

/* 
const mongoose = require('mongoose')
const url = `mongodb+srv://admin:BlackNinjafiveeightseven@base-cluster.nnrhjs8.mongodb.net/?retryWrites=true&w=majority`;

const connectionParams = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true 
}
mongoose.connect(url,connectionParams)
    .then( () => {
        console.log('Connected to the database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. n${err}`);
    }) 

    module.exports = 
    {
        "URI" : "mongodb+srv://admin:BlackNinjafiveeightseven@base-cluster.nnrhjs8.mongodb.net/?retryWrites=true&w=majority"
    }
*/