const {key, url} = require('./my-key');
const axios = require('axios');


const getExhangeRate = (from, to) => {
  return  axios.get(url).then((response)=>{
        const euro = 1 / response.data.rates[from];
        const rate = euro * response.data.rates[to];
        return rate;
    });
};

getExhangeRate('USD', 'CAD').then((rate)=>{
    console.log(rate);
});