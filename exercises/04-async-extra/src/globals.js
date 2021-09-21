function printHelp(cmd, help) {
  console.log(`\t%c${cmd}`, 'background: #305090; color: white', `- ${help}`);
}

const API_PATH = 'http://localhost:8083';

const apiRoutes = {
  newGame: () => `${API_PATH}/game/new`, // GET
  board: id => `${API_PATH}/game/${id}/board`, // GET
  fire: id => `${API_PATH}/game/${id}/fire`, // POST
  info: id => `${API_PATH}/game/${id}/info`, // GET
  stop: id => `${API_PATH}/game/${id}/stop`, // POST Body: { row, column }
};
