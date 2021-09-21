const fastify = require('fastify')(/*{ logger: true }*/);
const cors = require('cors');
const game = require('./game');

fastify.use(cors());

fastify.get('/game/new', async (request, reply) => {
  const info = game.start();
  return { info };
});

fastify.get('/game/:id/board', async (request, reply) => {
  const id = request.params.id;
  const board = game.getTrackingGrid(id);
  return { board };
});

fastify.get('/game/:id/info', async (request, reply) => {
  const id = request.params.id;
  const info = game.getInfo(id);
  return { info };
});

fastify.post('/game/:id/stop', async (request, reply) => {
  const id = request.params.id;
  const info = game.stop(id);
  return { info };
});

fastify.post('/game/:id/fire', async (request, reply) => {
  const id = request.params.id;
  const { column, row } = JSON.parse(request.body);
  const hit = game.fire(id, row, column);
  return { hit };
});

// Run the server!
const start = async () => {
  try {
    await fastify.listen(8083);
    fastify.log.info(`server listening on ${fastify.server.address().port}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
