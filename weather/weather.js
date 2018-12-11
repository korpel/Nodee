const request = require('request');
const credentialsFile = require('../geocode/cred2');

var getWeather = (lat, lng, callback) => {
request({
    url: `https://api.darksky.net/forecast/${credentialsFile.weatherCred}/${lat},${lng}`,
    json: true
}, (error, response, body) => {

    if (!error & response.statusCode === 200) {
        console.log(body.currently.temperature);
    } else {
        console.log('Unable to fetch weather');
    }

});
}

module.exports.getWeather = getWeather
