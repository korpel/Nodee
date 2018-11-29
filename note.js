

const fs = require('fs');
const os = require('os');
const file = require('./simpleFile.js');

var user = os.userInfo();

var res = file.addNote;
console.log(res)

//commenting out
// fs.appendFileSync('greetings.txt', `Hello ${user.username}!`);
// file.age
// var user = os.userInfo();



