

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

    }
    getUserList (room) {
        var users = this.users.filter((user)=>{

        });
    }
}


module.exports= {Users};