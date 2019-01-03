

const {mongoose} = require('../server/db/mongoose');
const {Todo} = require('../server/models/todo');
const {ObjectID} = require('mongodb');
const {User} = require ('./../server/models/user');

// Todo.remove({}).then( (result)=> {
//     console.log(result);
// });

// Todo.findByIdAndRemove('5c2e373a1b08123905680c53').then((result)=> {
//     console.log(result);
// });
