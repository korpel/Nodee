
var express = require('express');

var app = express();

app.use(express.static(__dirname + '/Public'))
app.get('/', (req, res) => {
    // res.send('<h1>Hello express<\h1>');
    res.send({
        name : 'Ant',
        likes : [
            'biking', 'running', 'fun'
        ]
    });
})

app.get('/about', (req, res) => {
    res.send('About Page');
});


app.get('/bad', (req,res) => {
    res.send({
        errorMessage : 'things went bad'
    });
});


app.listen(3000);