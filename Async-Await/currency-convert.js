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

const getCountries = async (currencyCode)=>{
    let countryUrl = `https://restcountries.eu/rest/v2/currency/${currencyCode}`;
    const response = await axios.get(countryUrl);
    return response.data.map((country)=>country.name);


};

const convertCurrency = (from,to,amount) => {
    getExhangeRate(from,to).then((rate)=> {
        const convertedAmount = (amount*rate).toFixed(2);
        console.log(convertedAmount);
    });
};

convertCurrency('USD', 'CAD', 20);


// getCountries('EUR').then((countries)=>{
//     console.log(countries);
// });

// getExhangeRate('USD', 'CAD').then((rate)=>{
//     console.log(rate);
// });