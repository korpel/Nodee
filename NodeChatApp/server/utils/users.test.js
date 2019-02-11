const expext = require('expect');

const {Users} = require('./users')

describe('Users', ()=>{
    var users;

    beforeEach(()=>{
        users = new Users();
    });

    it('Should add new user', ()=>{
        var users = new Users();
        var user = {
            id: '123',
            name: 'Andrew',
            room: 'The Office Fans'
        };
        var resUser = users.addUser(user.id, user.name, user.room);

        expext(users.users).toEqual([user]);
    });
});