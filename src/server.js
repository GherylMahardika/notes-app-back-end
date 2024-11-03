const hapi = require('@hapi/hapi');
const routes = require('./routes');
const handler = require('./handler');
const notes = require('./notes');

async function init(){
  const server = hapi.server({
    port:5000,
    host: 'localhost',
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  })

  server.route(routes);

  await server.start();
  console.log(`server berjalan di ${server.info.uri}`)
};

init();