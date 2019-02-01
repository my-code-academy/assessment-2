const Hapi = require('hapi');
const saveAllBooksInDBRoute = require('./routes/getAllBooksDataRoute');

const server = Hapi.server({
  port: 8082,
  host: 'localhost',
});

const init = async () => {
  server.route(saveAllBooksInDBRoute);
  await server.start();
  console.log(`Server running at: ${server.info.uri}`);
};

init();

module.exports = server;
