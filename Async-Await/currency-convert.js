const {key, url} = require('./my-key');
const axios = require('axios');


// const getExhangeRate =  (from, to) => {
//   return  axios.get(url).then((response)=>{
//         const euro = 1 / response.data.rates[from];
//         const rate = euro * response.data.rates[to];
//         return rate;
//     });
// };

const getExhangeRate =  async (from, to) => {
    const response = await axios.get(url);
          const euro = 1 / response.data.rates[from];
          const rate = euro * response.data.rates[to];
          return rate;
  };

const getCountries = (currencyCode)=>{
    let url = `https://restcountries.eu/rest/v2/currency/{currencyCode}`;

};

getExhangeRate('USD', 'CAD').then((rate)=>{
    console.log(rate);
});