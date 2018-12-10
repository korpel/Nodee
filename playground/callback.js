var getUser = (id, callback) => {
    var user ={
        id : id,
        name: 'Vikram'
    };
};

getUser(41, (user)=>{
    console.log(user); 
});