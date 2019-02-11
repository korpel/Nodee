const expext = require('expect');

const {Users} = require('./users')

describe('Users', ()=>{
    var users;

    beforeEach(()=>{
        users = new Users();
        users.users = [{
            id: '1',
            name:'Mike',
            room: 'Node'
        },{
        id: '2',
        name:'Tony',
        room: 'React'
    },{
        id: '3',
        name:'Kwstas',
        room: 'Node'
    }]
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

    it('Should return names for node course', () => {
        var userList = users.getUserList('Node');

        expect(userList).toEqual(['Mike','Kwstas']);
    });
});