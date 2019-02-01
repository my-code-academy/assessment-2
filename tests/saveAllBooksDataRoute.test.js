const server = require('../server');

describe('the /books/save route', () => {
  it('should respond with 200 for /GET call', async () => {
    const options = {
      method: 'GET',
      url: '/books/save',
    };
    const response = await server.inject(options);
    expect(response.statusCode).toBe(200);
  });
});
