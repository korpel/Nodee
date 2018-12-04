

const fs = require('fs');
const _ = require('lodash');

const file = require('./simpleFile.js');


var command = process.argv[2];
console.log('command: ', command);

if (command === 'add') {
    console.log('adding new file');
} 
else if (command === 'list') {
    console.log('list all nodes');
}
else if (command === 'read') {
    console.log('Reading node');
}
else if (command === 'remove') {
    console.log('Removing node');
}
else {
    console.log('command not recognized');
}
