

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const note2 = require('./notes.js');


const argv = yargs.argv;
var command = argv._[0]
console.log('command: ', command);
console.log('argv: ', argv);

if (command === 'add') {
   var note =  note2.addNote(argv.title, argv.body);
   if (note) {
    console.log('Note Created');
    console.log('--');
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);

   }else {
    console.log('Note title taken');
   }
} 
else if (command === 'list') {
    note2.getAll();
}
else if (command === 'read') {
    note2.getNote(argv.title);
}
else if (command === 'remove') {
   var noteRemoved = note2.removeNote(argv.title);
   var message = noteRemoved ? 'Note was removed' : 'Note not found';
   console.log(message);
}
else {
    console.log('command not recognized');
}
