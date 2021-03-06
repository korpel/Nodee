const utils = require('./utils');
const expect = require('expect');


describe('Utils', () => {
    describe('#add', () => {
        it('Should show 2 number', () => {
            var res = utils.add(33,11);
        
            expect(res).toBe(44).toBeA('number');
        
            // if (res !== 44) {
            // throw new Error(`Excpected 44 but got ${res}`);
            // }
        });
    });

    
    it('Should add 2 number', (done) => {
    
        utils.asyncAdd(3, 4, (sum) => {
            expect(sum).toBe(7).toBeA('number');
            done();
        });
    
    });
    
    it('Should square a number', () => {
        var res = utils.square(10);
    
        expect(res).toBe(100).toBeA('number');
    
        // if (res !== 100) {
        //     throw new Error(`Excpected 100 but instead got ${res}`);
        // }
    
    }); 
    
    it('Should ssquare a number', (done) => {
        utils.asyncSquare(3, (res) => {
           expect(res).toBe(9).toBeA('number'); 
           done();
        });
    });

});





it('Should set first name and last name ', () => {
    var user = {
        location: 'volos',
        age: 25
    };
    var res = utils.setName(user, 'Antonis Vozikis');
    expect(user).toEqual(res);
    expect(user).toInclude({
        firstName: 'Antonis', 
        lastName:'Vozikis'
    });
});

// it('Should expect some values', () => {
//     // expect(12).toNotBe(12);
//     // expect({name:'Tony'}).toNotEqual({name:'tony'});
//     // expect([2,3,4]).toInclude(2);
//     // expect([2,3,4]).toExclude(5);
//     expect({
//         name: 'tony',
//         age: 25,
//         location: 'volos'
//     }).toInclude({
//         age:25
//     })

// });