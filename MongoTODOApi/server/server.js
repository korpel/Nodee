
var {mongoose} = require('./db/mongoose')

// var Todo = mongoose.model('Todo', {
//     text : {
//         type: String,
//         required : true,
//         minlength: 1,
//         trim: true
//     },
//     completed: {
//         type: Boolean
//     },
//     completedAt: {
//         type: Number,
//         default : null
//     }
// });

var User = mongoose.model('Users', {
    email : {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    }
});


var user = new User({
    email: 'vozikis1@gmail.com     '
});

user.save().then((doc)=>{
    console.log('User saved', doc);
}, (e)=> {
    console.log('Unable to save user', e);
});

// var newTodo = new Todo({
//     text: 'Some proper string'
// }); 

// var newTodo2 = new Todo({
//     text: 'do laudo dishes',
//     completed: false,
//     completedAt : 12
// });

// newTodo.save().then((doc)=> {
//     console.log('Saved todo', doc);
// }, (err) => {
//     console.log('Unable to save todo');
// });

// newTodo2.save().then((doc)=> {
//     console.log('Saved todo 2', doc);
// }, (err)=> {
//     console.log('Unable to save todo 2');
// });