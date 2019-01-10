const {SHA256} = require('crypto-js');

var message = 'I am number 3';

var hash = SHA256(message).toString();

var data = {
    id: 4
};

var token = {
    data,
    hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
}; 

var resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString()
if (resultHash === token.hash) {
    console.log('data was not changed!');
} else {
    console.log('Data was changed');
}