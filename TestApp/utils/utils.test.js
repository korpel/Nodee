const utils = require('./utils');
const expect = require('expect');

it('Should show 2 number', () => {
    var res = utils.add(33,11);

    expect(res).toBe(44);
    // if (res !== 44) {
    // throw new Error(`Excpected 44 but got ${res}`);
    // }
});

it('Should square a number', () => {
    var res = utils.square(10);
    if (res !== 100) {
        throw new Error(`Excpected 100 but instead got ${res}`);
    }

});