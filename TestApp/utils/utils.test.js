const utils = require('./utils');

it('Should show 2 number', () => {
    var res = utils.add(33,11);
    if (res !== 44) {
    throw new Error(`Excpected 44 but got ${res}`);
    }
});

it('Should square a number', () => {
    var res = utils.square(10);
    if (res !== 100) {
        throw new Error(`Excpected 100 but instead got ${res}`);
    }

});