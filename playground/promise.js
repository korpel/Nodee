
var asyncAdd =(a,b) => {
    return new Promise((resolve, reject)=> {
        setTimeout(()=>{
            if (typeof a === 'number' && typeof b === 'number') {
                resolve(a+b);
            } else {
                reject ('Need to have numbers');
            }
        }, 1500);
    });
};

asyncAdd(1,3).then((res)=> {
    console.log('results:',res);
    return asyncAdd(res, 30);
}).then((res)=>{
    console.log('new number', res);
}).catch((errorMessage)=>{
    console.log(errorMessage);
});

// var somePromise = new Promise((resolve, reject)=> {
//     setTimeout(()=>{
//         resolve('Hey. It worked');
//     }, 2500);
//     setTimeout(()=> {
//         reject('Unable to fulfill promise');
//     },2500);

// });

// somePromise.then((message)=>{
//     console.log('Success:', message);
// }, (errorMessage) => {
//     console.log(errorMessage);
// });