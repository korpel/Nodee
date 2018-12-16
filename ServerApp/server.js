
const express = require('express');
const hbs = require('hbs');

var app = express();

hbs.registerPartials(__dirname + '/views/partials');
hbs.registerHelper('getCurrentYear', ()=>{
return new Date().getFullYear()
});
hbs.registerHelper('screamIt', (text)=>{
    return text.toUpperCase()
});

app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/Public'))

app.use((req,res,next)=> {

});

app.get('/', (req, res) => {
   res.render('home.hbs', {
    pageTitle: 'Home Page with render',
    welcomeMessage: 'Welcome to my home page',
    currentTime:  new Date().getHours(),
    currentMinutes: new Date().getMinutes(),
    currentSec: new Date().getSeconds(),
    currentMilliSec: new Date().getMilliseconds()
   });
})

app.get('/about', (req, res) => {
    res.render('about.hbs', {
        pageTitle: 'About Page with render'
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