

const fs = require('fs');
const os = require('os');
const file = require('./simpleFile.js');

var user = os.userInfo();
fs.appendFileSync('greetings.txt', `Hello ${user.username}!`);

var user = os.userInfo();



