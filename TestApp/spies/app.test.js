const expect = require('expect');


describe('App', () => {
    it('should call the spy correctly', ()=>{
        var spy = expect.createSpy();
        spy('Tony',25);
        expect(spy).toHaveBeenCalledWith('Tony', 25);
    });
});