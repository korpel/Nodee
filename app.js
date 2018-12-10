
var request = require('request');
var yargs = require('yargs');

const argv = yargs
    .options({
        a: {
            demand : true,
            alias : 'address',
            describe : 'Address demanded for weather app to work',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;
    
    var encodedAddress = encodeURIComponent(argv.address);

request({
    url:`https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyA2u2IBLLeNrzJjy02M2TLJETcjA_LUCwI&address=${encodedAddress}`,
    json: true
}, (error, response, body) => {
    if (error) {
        console.log('cannot connect to google server');
    } else if (body.status === 'ZERO_RESULTS') {
        console.log('unable to find address');
    }
    else if (body.status === 'OK') {
    console.log(`Address: ${body.results[0].formatted_address} location: ${JSON.stringify(body.results[0].geometry.location)}`);
    }
});