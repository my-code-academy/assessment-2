const Hapi = require('hapi');

const server = Hapi.server({
  port: 8082,
  host: 'localhost',
});

const init = async () => {
  server.route(getUserRoute);
  
  await server.start();
  console.log(`Server running at: ${server.info.uri}`);
};

init();

module.exports = server;
