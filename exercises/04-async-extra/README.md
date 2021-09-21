## Setup project

```

With npm:

```sh
npm install
npm start
```

## Description

You're going to make a simplified version of the game **Battleship**.
Battleship is played on a 10x10 grid, where the computer's fleet of ships are marked.
The location of the fleet is concealed from the player.
The player should fire shots at the computer's ships.
The objective of the game is to destroy the computer's fleet.

## Your task

Most of the game logic is already implemented on the server.
**The client (browser) should make the necessary calls to the server to make the game playable in the developer console.**

1. Open your browser at [http://localhost:5000](http://localhost:5000).
2. Open your the devtools (Chrome: `cmd+option+J` / `ctrl+shift+J`)
3. The "Help" menu is already printed. You can print it again by typing `help()` in the console.
4. TO DO: Implement the remaining functions from the help menu, so a game of _Battleship_ can be played from the browser's developer console.

The following API endpoints are available to you (see also src/globals.js):

1. `/game/new`

   - method: `GET`
   - description: Start a new game of "Battleship"
   - response:
     - info:
       - id: Unique identifier for you game. This ID should be used in subsequent calls
       - stoppedAt: Timestamp of when the game was stopped
       - startedAt: Timestamp of when the game was started
       - state: 'started', 'won' or 'stopped'
       - turns: The number of turns the player made

2. `/game/${id}/board`

   - method: `GET`
   - parameters:
     - id: The game ID you got from /game/new
   - description: Get the game board, with the hits and misses indicated
   - response:
     - board: A two dimensional array containing the grid

3. `/game/${id}/info`

   - method: `GET`
   - parameters:
     - id: The game ID you got from /game/new
   - description: Get information about a specific game session
   - response: Game info, see `/game/new`

4. `/game/${id}/stop`
   - method: `POST`
   - parameters:
     - id: The game ID you got from /game/new
   - body: empty
   - description: Stop a game session
   - response: Game info, see `/game/new`
5. `/game/${id}/fire`
   - method: `POST`
   - parameters:
     - id: The game ID you got from /game/new
   - body: A JSON object:
     ```json
     {
       "column": columnIndex,
       "row": rowIndex
     }
     ```
   - description: Fire a shot at position defined by columnIndex and rowIndex
   - response:
     - hit: Boolean, `true` when a part of a ship was hit
