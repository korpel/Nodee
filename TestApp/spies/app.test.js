const expect = require('expect');

const rewire = require('rewire');

var app = rewire('./app');


describe('App', () => {
    var db = {
        saveUser : expect.createSpy();
    };
    it('should call the spy correctly', ()=>{
        var spy = expect.createSpy();
        spy('Tony',25);
        expect(spy).toHaveBeenCalledWith('Tony', 25);
    });
});