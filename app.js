const yargs = require('yargs');
const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');


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

    // geocode.geocodeAddress(argv.address, (errorMessage, results) => {
    //     if (errorMessage) {
    //         console.log(errorMessage);
    //     } else {
    //         console.log(JSON.stringify(results, undefined, 2));
    //     }
    // });

    weather.getWeather(42.3601, -71.0589, (errorMessage, weatherResults) => {
        if(errorMessage) {
            console.log(errorMessage);
        } else {
            console.log(JSON.stringify(weatherResults, undefined, 2));
        }
    });
