
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');


var id = '5c28c642fa5e42054094303f';

Todo.find({
    _id : id
}).then((todos)=> {
    console.log('Todos', todos)
}); 

Todo.findOne({
    _id : id
}).then((todo)=> {
    console.log('Todos', todo)
}); 