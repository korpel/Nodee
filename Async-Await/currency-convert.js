const {key, url} = require('./my-key');


const getExhangeRate = (from, to)=> {
    axios.get(url).then(()=>{
        const euro = 1 / response.data.rates[from];
        const rate = euro * response.data.rats[to];
    });
};