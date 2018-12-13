
const express = require('express');
const hbs = require('hbs');

var app = express();

app.set('view engine', 'hbs');
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
    res.render('about.hbs', {
        pageTitle: 'About Page',
        currentYear: new Date().getFullYear()
    });
});


app.get('/bad', (req,res) => {
    res.send({
        errorMessage : 'things went bad'
    });
});


app.listen(3000, () =>{
    console.log('server is up and running');
});