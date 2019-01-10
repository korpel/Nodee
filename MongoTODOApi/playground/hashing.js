const {SHA256} = require('crypto-js');

var message = 'I am number 3';

var hash = SHA256(message).toString();

var data = {
    id: 4
};