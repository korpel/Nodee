var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();


app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text,
        completed: req.body.completed
    });

    todo.save().then((doc)=> {
        res.send(doc);
    }, (err)=> {
        res.status(400).send(err);
    });
    
});

app.get('todos', (req, res)=>{

});


app.listen(3000, () => {
    console.log('Started on port 3000');
});


module.exports = {app};