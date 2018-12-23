// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
       return console.log('Unable to connect to the server');
    }
    console.log('Connected to the server');

    db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((results)=>{
        console.log(results);
    });

    // db.close();
});