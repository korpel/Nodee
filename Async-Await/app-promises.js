

const users = [{
    id:1,
    name: 'Andrew',
    schoolId: 101
}, {
    id:2,
    name: 'Tony',
    schoolId: 293
}];
const grades = [{
    id : 1,
    schoolId: 101,
    grade: 90
}, {
    id : 1,
    schoolId: 101,
    grade: 90
}, {
    id : 1,
    schoolId: 101,
    grade: 90
}];

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

getUser(1).then((user)=>{
    console.log(user);
}).catch((e)=>{
    console.log(e);
});
