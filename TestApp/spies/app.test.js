const expect = require('expect');

const rewire = require('rewire');

var app = rewire('./app');


describe('App', () => {
    var db = {
        saveUser : expect.createSpy();
    };
    app.__set__ ('db', db)
    it('should call the spy correctly', ()=>{
        var spy = expect.createSpy();
        spy('Tony',25);
        expect(spy).toHaveBeenCalledWith('Tony', 25);
    });

    it('Should call saveUser with user Object', () => {
        var email = 'ant@example.com'
        var password = '123abc';

        app.handleSignup(email,password); 
        expect(db.saveUser).toHaveBeenCalledWith({

        });
    });

});