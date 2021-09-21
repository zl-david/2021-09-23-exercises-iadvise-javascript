const Moniker = require('moniker');
const VARS = require('./grids').VARS;
const getRandomGrid = require('./grids').getRandomGrid;
const getEmptyGrid = require('./grids').getEmptyGrid;

const activeGames = {};

const GAME_STATE = {
  STARTED: 'started',
  WON: 'won',
  STOPPED: 'stopped',
};

const assertBoardExists = id => {
  if (!activeGames[id]) {
    throw new Error(`Board with id ${id} not found.`);
  }
};
const assertNotEmpty = (key, value) => {
  if (typeof value === 'undefined') {
    throw new Error(`${key} is missing`);
  }
};
const assertGameNotStopped = game => {
  if (game.state !== GAME_STATE.STARTED) {
    throw new Error(`Cannot do that, game is finished.`);
  }
};
const getGame = id => {
  assertBoardExists(id);
  return activeGames[id];
};

const updateGameBoard = (game, row, column, value) => {
  game.tracking[row][column] = value;
  game.turns += 1;
  if (isWon(game)) {
    game.state = GAME_STATE.WON;
    game.stoppedAt = new Date();
  }
};

const isWon = game => {
  for (let row in game.private.board) {
    for (let column in game.private.board[row]) {
      if (game.private.board[row][column] === VARS.BOAT) {
        if (game.tracking[row][column] !== VARS.HIT) {
          return false;
        }
      }
    }
  }
  return true;
};

module.exports = {
  start() {
    const id = Moniker.choose();

    activeGames[id] = {
      id,
      stoppedAt: null,
      startedAt: new Date(),
      tracking: getEmptyGrid(),
      state: GAME_STATE.STARTED,
      turns: 0,
      private: {
        board: getRandomGrid(),
      },
    };

    return this.getInfo(id);
  },

  stop(id) {
    const game = getGame(id);
    assertGameNotStopped(game);
    game.state = GAME_STATE.STOPPED;
    game.stoppedAt = new Date();

    return this.getInfo(id);
  },

  getInfo(id) {
    const game = getGame(id);
    return {
      id: game.id,
      stoppedAt: game.stoppedAt,
      startedAt: game.startedAt,
      state: game.state,
      turns: game.turns,
    };
  },

  getTrackingGrid(id) {
    return getGame(id).tracking;
  },

  fire(id, row, column) {
    assertNotEmpty('row', row);
    assertNotEmpty('column', column);
    const game = getGame(id);
    assertGameNotStopped(game);

    if (game.private.board[row][column] === VARS.BOAT) {
      updateGameBoard(game, row, column, VARS.HIT);
      return true;
    }

    updateGameBoard(game, row, column, VARS.MISS);
    return false;
  },
};
