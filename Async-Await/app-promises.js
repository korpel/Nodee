

const users = [{
    id:1,
    name: 'Andrew',
    schoolId: 101
}, {
    id:2,
    name: 'Tony',
    schoolId: 293
}];
const grades = [];

const getUser = (id) =>{
    return new Promise((resolve, reject)=>{
        const user = users.find((user)=> user.id === id);

        if (user) {
            resolve(user);
        } else {
            reject(`Unable to find user with id of ${id}.`)
        }

    });
};

getUser(2).then((user)=>{
    console.log(user.);
}).catch((e)=>{
    console.log(e);
});
