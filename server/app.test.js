const request = require('supertest');
const app = require('./server');

describe('Test the root path', () => {
  test('It should response the GET method with status code of 200', () => {
    return request(app).get('/menus').expect(200);
  });

  test('It should response the GET method with status code of 200', (done) => {
    return request(app).get('/menus').expect('Content-Type', 'text/html; charset=utf-8', done);
  });
});
