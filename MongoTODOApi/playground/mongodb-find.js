// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
       return console.log('Unable to connect to the server');
    }
    console.log('Connected to the server');

    // db.collection('Todos').find({
    //     _id: new ObjectID('5c1fac7d74bb20e5a16acd9c')
    // }).toArray().then((docs)=>{
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err)=>{
    //     console.log('Unable to fetch todos', err);
    // });
    // db.collection('Todos').find().count().then((count)=>{
    //     console.log('Todos number');
    //     console.log(count);
    // }, (err)=>{
    //     console.log('Unable to fetch todos', err);
    // });
        db.collection('Users').find({name: 'Antonis'}).toArray().then((docs)=> {
            console.log('Users with name Antonis');
            console.log(JSON.stringify(docs, undefined, 2));
        }, (err) => {
            console.log('Unable to fetch Users', err);
        });

    // db.close();
});