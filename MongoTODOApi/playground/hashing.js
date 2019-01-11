const {SHA256} = require('crypto-js');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');



var password = '123abc';
bcrypt.genSalt(10,()=>{

});

// var data = {
//          id: 10
// };

// var token = jwt.sign(data, '123456');

// var decoded = jwt.verify(token, '123456');

// var message = 'I am number 3';

// var hash = SHA256(message).toString();

// var data = {
//     id: 4
// };

// var token = {
//     data,
//     hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// }; 

// token.data.id = 5;
// token.hash = SHA256(JSON.stringify(data) + 'a').toString()

// var resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString()
// if (resultHash === token.hash) {
//     console.log('Data was not changed!');
// } else {
//     console.log('Data was changed. Do not trust');
// }