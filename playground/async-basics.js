console.log('starting app');

setTimeout(() => {
    console.log('inside the first timeout');
}, 2000);

setTimeout(()=> {
    console.log('inside the second timeout');
}, 0);

console.log('finishing app');