// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
       return console.log('Unable to connect to the server');
    }
    console.log('Connected to the server');

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5c1fe4d51b0812390567b328')
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result)=> {
    //     console.log(result);
    // });

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5c1fad3a55b548e60d52fcc9')
    }, {
        $set: {
            name: 'Kwstas'
        },
        $inc: {
            age: 2
        }

    }, {
        returnOriginal: false
    }.then((result)=> {
        console.log(result);
    });

    // db.close();
});