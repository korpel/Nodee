const request = require('supertest');
const expect = require('expect');

var app = require('./server').app;


describe('Server', () => {
    describe('/', ()=> {

    });
    describe('/', ()=> {

    });
});

it('should return hello world response', (done) => {
    request(app)
    .get('/')
    .expect(404)
    .expect((res)=> {
        expect(res.body).toInclude({
            error: 'Page not Found!'
        });
    })
    .end(done);
});

it('Should return my user object', (done) => {
    request(app)
    .get('/users')
    .expect(200)
    .expect((res) => {
        expect(res.body).toInclude({
            name: 'Tony',
            age: 265
        });
    })
    .end(done);
});