
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

asyncAdd(1,true).then((res)=> {
    console.log('results:',res);
}, (errorMessage)=>{
    console.log('failed:', errorMessage);
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