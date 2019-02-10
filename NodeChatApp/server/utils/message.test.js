
var expect = require('expect');
var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage',() => {
    it('Should generate the correct message object', () => {
        var from = 'Jen';
        var text = 'Some message'
        var message = generateMessage(from, text);

        expect(message.createdAt).toBeA('number');
        expect(message).toInclude({from,text});
    });
});

describe('generateLocationMessage', ()=> {
    it('Should generate correct location object', ()=>{
        var from = 'Deb';
        var latitude = 15;
        var longtitude = 19;
        var url = 'https://www.google.com/maps?q=15,19'
        var message = generateLocationMessage(from, latitude,longtitude)

        expect(message.createdAt).toBeA('number');
        expect(message).toInclude({from,latitude, longtitude});
    });
});