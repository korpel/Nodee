
const express = require('express');
const hbs = require('hbs');

var app = express();

app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/Public'))
app.get('/', (req, res) => {
   res.render('home.hbs', {
    pageTitle: 'Home Page with render',
    currentYear: new Date().getFullYear(),
    welcomeMessage: 'Welcome to my home page',
    currentTime:  new Date().getHours(),
    currentMinutes: new Date().getMinutes(),
    currentMilliSec: new Date().getMilliseconds()
   });
})

app.get('/about', (req, res) => {
    res.render('about.hbs', {
        pageTitle: 'About Page with render',
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