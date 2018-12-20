const expect = require('expect');

const rewire = require('rewire');


describe('App', () => {
    it('should call the spy correctly', ()=>{
        var spy = expect.createSpy();
        spy('Tony',25);
        expect(spy).toHaveBeenCalledWith('Tony', 25);
    });
});