


var somePromise = new Promise((resolve, reject)=> {
    setTimeout(()=>{
        resolve('Hey. It worked');
    }, 2500);
    setTimeout(()=> {
        reject('Unable to fulfill promise');
    },2499);

});

somePromise.then((message)=>{
    console.log('Success:', message);
}, (errorMessage) => {
    console.log(errorMessage);
});