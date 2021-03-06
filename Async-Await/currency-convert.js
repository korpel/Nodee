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

    try {
        const response = await axios.get(url);
        const euro = 1 / response.data.rates[from];
        const rate = euro * response.data.rates[to];

        if (isNaN(rate)) {
            throw new Error();
        }

        return rate;
    } catch (e) {
        throw new Error(`Unable to get exchange rate from ${from} and ${to}.`);
    }
  };

const getCountries = async (currencyCode)=>{
    try {
        let countryUrl = `https://restcountries.eu/rest/v2/currency/${currencyCode}`;
        const response = await axios.get(countryUrl);
        return response.data.map((country)=>country.name);
    } catch(e) {
        throw new Error(`Unable to get countries that use ${currencyCode}`);
    }
};

// const convertCurrency = (from,to,amount) => {
//     let convertedAmount;
//     return getExhangeRate(from,to).then((rate)=> {
//         convertedAmount = (amount*rate).toFixed(2);
//         return getCountries(to)
//     }).then((countries)=>{
//         return `${amount} ${from} is worth ${convertedAmount} ${to}. You can spend it in the following countries ${countries.join(', ')}`;
//     });
// };
const convertCurrency = async (from,to,amount) => {
    const rate = await getExhangeRate(from,to);
    const countries = await getCountries(to);
    const convertedAmount = (amount*rate).toFixed(2);
    return `${amount} ${from} is worth ${convertedAmount} ${to}. You can spend it in the following countries ${countries.join(', ')}`;
};

convertCurrency('USD', 'CAD', 20).then((message)=>{
    console.log(message);
}).catch((e)=>{
    console.log(e.message);
});


// getCountries('EUR').then((countries)=>{
//     console.log(countries);
// });

// getExhangeRate('USD', 'CAD').then((rate)=>{
//     console.log(rate);
// });









// const add = async (a,b)=> a+b+c

// const doWork = async ()=>{
//     try {
//         const result = await add(12,13)
//         return result
//     } catch (e) {
//         return 10
//     }
  
// };

// doWork().then((data)=>{
//     console.log(data);
// }).catch((e)=>{
//     console.log('Something went wrong')
// });