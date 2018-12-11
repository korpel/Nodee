const request = require('request');
const credentialsFile = require('./geocode/cred2');

var getWeather = () => {
request({
    url: 'to url moy'
    json: true
}, (error, response, body) => {

    if (!error & response.statusCode === 200) {
        console.log(body.currently.temperature);
    } else {
        console.log('Unable to fetch weather');
    }

});
}

module.exports = {
    getWeather
}
