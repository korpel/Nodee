const request = require('request');
const credentialsFile = require('./cred');

const credentials = credentialsFile.cred;

var geocodeAddress = (address) => {
    var encodedAddress = encodeURIComponent(address, callback);
request({
    url:`https://maps.googleapis.com/maps/api/geocode/json?key=${credentials}&address=${encodedAddress}`,
    json: true
}, (error, response, body) => {
    if (error) {
        callback('cannot connect to google server');
        console.log();
    } else if (body.status === 'ZERO_RESULTS') {
        console.log('unable to find address');
    }
    else if (body.status === 'OK') {
    console.log(`Address: ${body.results[0].formatted_address} location: ${JSON.stringify(body.results[0].geometry.location)}`);
    }
    else {
        console.log('wtf');
    }
});
};

module.exports = {
    geocodeAddress
};