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
  }
}

fastify.use(cors());

fastify.get('/poll/active', async (request, reply) => {
  return database.poll['1'];
});

fastify.get('/poll/:id/result', async (request, reply) => {
  return {
    id: 1,
    options: [
      {id: 11, result: 9},
      {id: 12, result: 14}
    ]
   };
});

fastify.post('/poll/:id/vote', async (request, reply) => {
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