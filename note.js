

const fs = require('fs');
const os = require('os');
const file = require('./simpleFile.js');
const _ = require('nodash');

var user = os.userInfo();

var res = file.addNote();
console.log(res);
var num = file.add(1,2);
console.log('result:',num);
console.log(_.isString(true));
console.log(_.isString('Tony'));

//commenting out
// fs.appendFileSync('greetings.txt', `Hello ${user.username}!`);
// file.age
// var user = os.userInfo();



