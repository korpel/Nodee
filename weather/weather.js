const request = require('request');

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