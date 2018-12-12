const yargs = require('yargs');
const axios = require('axios');

const credentialsFile = require('./geocode/cred2');

const credentials = credentialsFile.cred;


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
        console.log(response.data);
    }).catch((a) => {
        console.log(e);
    });

