const utils = require('./utils');

it('Should show 2 number', () => {
    var res = utils.add(33,11);
    if (res !== 44) {
    throw new Error('Excpected 44');
    }
})