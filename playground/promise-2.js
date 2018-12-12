const request = require('request');
const credentialsFile = require('../geocode/cred2');
const credentials = credentialsFile.cred;


var geocodeAddress = (address) => {
    
    return new Promise((resolve, reject)=>{
        var encodedAddress = encodeURIComponent(address);
request({
    url:`https://maps.googleapis.com/maps/api/geocode/json?key=${credentials}&address=${encodedAddress}`,
    json: true
}, (error, response, body) => {
    if (error) {
        reject('cannot connect to google server');
        console.log();
    } else if (body.status === 'ZERO_RESULTS') {
        reject('unable to find address');
    }
    else if (body.status === 'OK') {
        resolve({
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
    }) ;
    
};

geocodeAddress('19164').then((location) => {
    console.log(JSON.stringify(location,undefined,2));
}, (errorMessage) => {
    console.log(errorMessage);
});



