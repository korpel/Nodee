const request = require('request');
const credentialsFile = require('../geocode/cred2');

var geocodeAddress = (address) => {
    return new promise(()=>{
        request({
        url: `https://api.darksky.net/forecast/${credentialsFile.weatherCred}/${lat},${lng}`,
        json: true

           resolve(undefined, {
              temperature: body.currently.temperature,
              apparentTemperature: body.currently.apparentTemperature
              
            });
    
            re('Unable to fetch weather');
    
    });
});
};

geocodeAddress('19164').then((location)=>{
    console.log(JSON.stringify(location,undefined,2));
}, (errorMessage)=>{
    console.log(errorMessage);
});



var getWeather = (lat, lng, callback) => {

}

module.exports.getWeather = getWeather
