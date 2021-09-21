function help() {
  console.log('================ HELP ================');
  printHelp('newGame()', 'Start a new game.');
  printHelp('fire(row, column)', 'Fire!');
  printHelp('printBoard()', 'Print your tracking grid.');
  printHelp('info()', 'Print game info.');
  printHelp('stop()', 'Stop the game.');
  printHelp('help()', 'Print this help.');
  console.log('======================================');
}

help();
