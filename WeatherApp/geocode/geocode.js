const request = require('request');
const credentialsFile = require('./cred2');

const credentials = credentialsFile.cred;

var geocodeAddress = (address, callback) => {
    var encodedAddress = encodeURIComponent(address);
request({
    url:`https://maps.googleapis.com/maps/api/geocode/json?key=${credentials}&address=${encodedAddress}`,
    json: true
}, (error, response, body) => {
    if (error) {
        callback('cannot connect to google server');
        console.log();
    } else if (body.status === 'ZERO_RESULTS') {
        callback('unable to find address');
    }
    else if (body.status === 'OK') {
        callback(undefined, {
            address: body.results[0].formatted_address,
            latitude: body.results[0].geometry.location.lat,
            longtitude: body.results[0].geometry.location.lng,
            location: body.results[0].geometry.location

        })
    }
    else {
        console.log('wtf');
    }
});
};

module.exports = {
    geocodeAddress
};