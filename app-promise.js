const yargs = require('yargs');
const axios = require('axios');



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


    var encodedAddress = encodeURIComponent(address);
