

const fs = require('fs');
const os = require('os');
const file = require('./simpleFile.js');
const _ = require('lodash');

var user = os.userInfo();

var res = file.addNote();
console.log(res);
var num = file.add(1,2);
console.log('result:',num);

var filteredArray = _.uniq(['An', 1, 'An',2,3,1,2]);
console.log(filteredArray);

console.log(_.isString(true));
console.log(_.isString('Tony'));

//commenting out
// fs.appendFileSync('greetings.txt', `Hello ${user.username}!`);
// file.age
// var user = os.userInfo();



