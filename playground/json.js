
// var obj = {
//     name: 'Anthony'
// };

// var stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj);


// var personString = '{"name":"Antonis","age":"25"}';
// var person = JSON.parse(personString);
// console.log(typeof person);
// console.log(person);

const fs = require('fs');

var originalNote = {
    title : 'Some title',
    body : 'Some body'
};

fs.writeFileSync('notes.json', originalNoteString);