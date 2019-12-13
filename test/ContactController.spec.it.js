const request = require('supertest');
const app = require('../index');

describe('GET /contacts', () => {
    it ('should return a list of contacts', (done) => {
        request(app)
            .get('/contacts')
            .expect(200)
            .end(done)
    })
});
