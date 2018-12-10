
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
    
    var encodedAddress = encodeURIComponent(argv.a);

request({
    url:`https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyA2u2IBLLeNrzJjy02M2TLJETcjA_LUCwI&address=${encodedAddress}`,
    json: true
}, (error, response, body) => {
    console.log(`Address: ${body.results[0].formatted_address} location: ${JSON.stringify(body.results[0].geometry.location)}`);
});