

class Users {
    constructor(){
        this.users = []
    }
    addUser (id, name, room) {
        var user = {id, name , room};
        this.users.push(user);
        return user;
    }
    removeUser (id) {

    }
    getUser (id){
        return this.users,filter((user)=>user.id)[0];
    }
    getUserList (room) {
        var users = this.users.filter((user)=> user.room === room);
        var namesArray = users.map((user)=> user.name);

        return namesArray;
    }
}


module.exports= {Users};