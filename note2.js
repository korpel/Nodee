

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const note = require('./notes.js');


const argv = yargs.argv;
var command = argv._[0];
console.log('command: ', command);
console.log('argv: ', argv);

if (command === 'add') {
    var notes = [];
    var note = {
        title,
        body
    };
    notes.push(note);
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
} 
else if (command === 'list') {
    note.getAll();
}
else if (command === 'read') {
    note.getNote(argv.title);
}
else if (command === 'remove') {
    note.removeNote(argv.title);
}
else {
    console.log('command not recognized');
}
