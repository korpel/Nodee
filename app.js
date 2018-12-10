
var request = require('request');


request({
    url:'https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyA2u2IBLLeNrzJjy02M2TLJETcjA_LUCwI&address=1301%20lombard%20street%20philadelpia',
    json: true
}, (error, response, body) => {
    console.log(`Address: ${body.results[0].formatted_address}`);
});