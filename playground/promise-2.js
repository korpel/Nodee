const request = require('request');
const credentialsFile = require('../geocode/cred2');

var geocodeAddress = (address) => {
    
    return new Promise((resolve, reject)=>{

        var getWeather = (lat, lng, callback) => {
            request({
                url: `https://api.darksky.net/forecast/${credentialsFile.weatherCred}/${lat},${lng}`,
                json: true
            }, (error, response, body) => {
            
                if (!error & response.statusCode === 200) {
                   resolve({
                      temperature: body.currently.temperature,
                      apparentTemperature: body.currently.apparentTemperature
                      
                    });
            
                } else {
                    reject('Unable to fetch weather');
                }
            
            });
            };
    }) ;
    
};

geocodeAddress('19164').then((location)=>{
    console.log(JSON.stringify(location,undefined,2));
}, (errorMessage)=>{
    console.log(errorMessage);
});



