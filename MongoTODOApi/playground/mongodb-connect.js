
const MongoClient = require('mongodb').MongoClient;


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
       return console.log('Unable to connect to the server');
    }
    console.log('Connected to the server');

    db.collection('Todos').insertOne({
        text: 'Something to do'
    }()=>{})

    db.close();
});