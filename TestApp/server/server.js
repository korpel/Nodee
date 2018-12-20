const express = require('express');


var app = express();

app.get('/', (req,res) => {
    res.status(404).send({
        error: 'Page not Found!',
        name: 'TODO app v 1.0'
    });
});

app.get('/users', (req, res) => {
    res.send({
        name: 'Mike',
        age: 27
    }, {
        name: 'Andrew',
        age: 25
    }, {
        name: 'Tony',
        age:265
    });
});

app.listen(3000);

module.exports.app = app;