const utils = require('./utils');
const expect = require('expect');

it('Should show 2 number', () => {
    var res = utils.add(33,11);

    expect(res).toBe(44).toBeA('number');

    // if (res !== 44) {
    // throw new Error(`Excpected 44 but got ${res}`);
    // }
});

it('Should square a number', () => {
    var res = utils.square(10);

    expect(res).toBe(100).toBeA('number');

    // if (res !== 100) {
    //     throw new Error(`Excpected 100 but instead got ${res}`);
    // }

}); 

it('Should expect some values', () => {
    // expect(12).toNotBe(12);
    // expect({name:'Tony'}).toNotEqual({name:'tony'});
    expect([2,3,4]).toInclude(2);
    expect([2,3,4]).toExclude(5);

});