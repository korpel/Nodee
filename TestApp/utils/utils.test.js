const utils = require('./utils');

it('Should show 2 number', () => {
    var res = utils.add(33,11);
    if (res !== 44) {
    throw new Error(`Excpected 44 but got ${res} `);
    }
});

it('Should square a number', () => {
    var res = utils.square(100);
    if (res !== 99) {
        throw new Error(`Excpected 99 but instead got ${res}`);
    }

});