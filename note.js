

const fs = require('fs');
const os = require('os');
var user = os.userInfo();
fs.appendFileSync('greetings.txt', `Hello ${user.username}!`);

var user = os.userInfo();
console.out('otan grafw kati emfanizete');