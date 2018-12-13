const yargs = require('yargs');
const axios = require('axios');

const credentialsFile = require('../geocode/cred2');

const credentials = credentialsFile.cred;
const credentialsW = credentialsFile.weatherCred;


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
    var geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?key=${credentials}&address=${encodedAddress}`;
    
    axios.get(geocodeUrl).then((response)=>{
        if(response.data.status === 'ZERO_RESULTS') {
            throw new Error('Unable to find the address');
        }
        var lat = response.data.results[0].geometry.location.lat;
        var lng = response.data.results[0].geometry.location.lng;
        var weatherUrl = `https://api.darksky.net/forecast/${credentialsW}/${lat},${lng}`;

        console.log(response.data.results[0].formatted_address);
        return axios.get(weatherUrl);
    }).then((response)=>{
        var temperature = response.data.currently.temperature;
        var apparentTemperature = response.data.currently.apparentTemperature;
        console.log(`It's ${temperature} degrees but feels like ${apparentTemperature}.`);
    }).catch((e) => {
        if (e.code ==='ENOTFOUND') {
            console.log('unable to have access to the servers')
        } else {
            console.log(e.message);
        }
    });

