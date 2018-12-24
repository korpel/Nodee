
var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo = mongoose.model('Todo', {
    text : {
        type: String,
        required : true
    },
    completed: {
        type: Boolean
    },
    completedAt: {
        type: Number
    }
});


// var newTodo = new Todo({
//     text: 'cook dinner'
// }); 

// var newTodo2 = new Todo({
//     text: 'do laudo dishes',
//     completed: false,
//     completedAt : 12
// });

newTodo.save().then((doc)=> {
    console.log('Saved todo', doc);
}, (err) => {
    console.log('Unable to save todo');
});

// newTodo2.save().then((doc)=> {
//     console.log('Saved todo 2', doc);
// }, (err)=> {
//     console.log('Unable to save todo 2');
// });