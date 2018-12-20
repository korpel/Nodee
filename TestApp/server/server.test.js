const request = require('supertest');

var app = require('./server').app;

it('should return hello world response', (done) => {
    request(app)
    .get('/')
    .expect(404)
    .expect({
        error: 'Page not Found!'
    })
    .end(done);
});