
const MongoClient = require('mongodb').MongoClient;


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
       return console.log('Unable to connect to the server');
    }
    console.log('Connected to the server');

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // },(err, result) => {
    //     if (err) {
    //       return  console.log('Unable to insert Todos', err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    db.collection('Users').insertOne({
        name: 'Antonis',
        age: 25,
        location: 'Loutsa'
    }, (err, result) => {
        if (err) {
            return console.log('Unable to insert Users', err);
        }
        console.log(JSON.stringify(result.ops[0]._id, undefined, 2));
    });

    db.close();
});