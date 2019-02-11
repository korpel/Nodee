const expect = require('expect');

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


    it('Should remove a user',()=>{

    });

    it('Should not remove user', ()=>{

    });

    it('Should find user',()=>{
        var userId = '2';
        var user = users.getUser(userId);
    });
    it('Should not find user',()=>{

    });

    it('Should add new user', ()=>{
        var users = new Users();
        var user = {
            id: '123',
            name: 'Andrew',
            room: 'The Office Fans'
        };
        var resUser = users.addUser(user.id, user.name, user.room);

        expect(users.users).toEqual([user]);
    });

    it('Should return names for node', () => {
        var userList = users.getUserList('Node');

        expect(userList).toEqual(['Mike','Kwstas']);
    });

    it('Should return names for React', () => {
        var userList = users.getUserList('React');

        expect(userList).toEqual(['Tony',]);
    });
});