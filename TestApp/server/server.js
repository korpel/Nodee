const express = require('express');


var app = express();

app.get('/', (req,res) => {
    res.status(404).send({
        error: 'Page not Found!',
        name: 'TODO app v 1.0'
    });
});

app.get('/users', (req, res) => {

});

app.listen(3000);

module.exports.app = app;