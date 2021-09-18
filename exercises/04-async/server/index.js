const fastify = require('fastify')(/*{ logger: true }*/);
const cors = require('cors');

const database = {
  poll: {
    1: { 
      id: 1,
      options: [
        {
          id: 11,
          title: 'Iron Man',
          image: '/images/iron-man.jpeg',
        },
        {
          id: 12,
          title: 'Batman',
          image: '/images/batman.jpg',
        }
      ] 
    }
  },
  results: {
    1: {
      11: 0,
      12: 0
    }
  }
}

fastify.use(cors());

fastify.get('/poll/active', async (request, reply) => {
  return database.poll['1'];
});

fastify.get('/poll/:id', async (request, reply) => {
  const id = request.params.id;

  return database.results[id];
});

fastify.get('/poll/:id/result', async (request, reply) => {
  const id = request.params.id;

  return database.results[id];
});

fastify.post('/poll/:id/vote', async (request, reply) => {
  const id = request.params.id;
  const optionId = request.body.optionId;

  if (database.results[id] === undefined) {
    return reply.code(404).header('Content-Type', 'application/json; charset=utf-8').send({msg: `Poll with id ${id} not Found`});
  }
  if (database.results[id][optionId] === undefined) {
    return reply.code(404).header('Content-Type', 'application/json; charset=utf-8').send({msg: `Poll option with id ${optionId} not Found`});
  }

  database.results[id][optionId] = database.results[id][optionId] + 1;

  return { msg: 'success' };
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