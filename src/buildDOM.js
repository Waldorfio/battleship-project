/* eslint-disable semi */

require('./style.css');
const factoryBoard = require('./factories/factoryBoard');
const factoryPlayer = require('./factories/factoryPlayer');
const shipArr = require('./initialiseShips');
const playerShipArr = shipArr[0];
const gameLoop = require('./gameLoop');
console.clear();
console.log('-----------');

function idxToCoords (idx) { // Function to convert an index, to an x,y coord
  if (idx < 10) { // You are in the first row
    const x = 0;
    const y = idx;
    return [parseInt(x), parseInt(y)];
  } else if (idx >= 10) { // Otherwise split the numbers
    const x = idx.toString()[0];
    const y = idx.toString()[1];
    return [parseInt(x), parseInt(y)];
  }
}

/// / PART 1: INITIALISE PLAYERS AND BOARDS ////////////////

// Player 1 & Bot Initialise
function randomiseBoard (p2) {
  const setGrid = require('./setGrid');
  p2.gameBoard.boardArr = setGrid;
}

const boardPlayer = factoryBoard([]);
const boardBot = factoryBoard([]);
const player1 = factoryPlayer('placeholder', boardPlayer);
const player2 = factoryPlayer('computer bot', boardBot);
player1.gameBoard.reset(); // Create an empty 10x10 array
player2.gameBoard.reset(); // Create an empty 10x10 array
randomiseBoard(player2); // Randomise the bots board
console.log(player2.gameBoard.boardArr);

/// / PART 2: LANDING PAGE //// ///////////////////////////

// Add START GAME button logic
const wipeLanding = () => { // Initialise eventListener arrow function
  const playerName = document.getElementById('player-name').value; // Extract Player Name
  console.log('playerName: ' + playerName);
  document.getElementById('landing-cont').remove(); // Wipe Landing Page
  player1.name = playerName.toUpperCase(); // Save Player names
  buildBoardDOM(); // Build the next page
}
const startButton = document.getElementById('start-button');
startButton.addEventListener('click', wipeLanding);

/// / PART 3: BUILD YOUR BOARD //// //////////////////////

// Append DOM items
function buildBoardDOM () {
  const buildCont = document.createElement('div'); // Build Board Container
  const promptBuild = document.createElement('div'); // Greet Player personally
  const squareCont = document.createElement('div'); // Build the grid
  buildCont.id = 'build-cont';
  promptBuild.id = 'player-prompt';
  promptBuild.className = 'prompts';
  squareCont.id = 'player-squares';
  promptBuild.innerHTML = player1.name + ', PLACE YOUR CARRIER!';
  document.getElementById('outer-cont').appendChild(buildCont);
  buildCont.appendChild(promptBuild);
  buildCont.appendChild(squareCont);

  // Create the grid squares
  for (let i = 0; i < 100; i++) {
    const square = document.createElement('div');
    square.className = 'square';
    square.addEventListener('click', clickedSquare.bind(this, i, square, shipIdx));
    squareCont.appendChild(square);
  }
}

// Control Ship Placement
const shipIdx = [0];
function clickedSquare (i, square, shipIdx) {
  // Check if placed all ships or not
  if (shipIdx[0] === 6) {
    document.getElementById('player-prompt').innerHTML = 'Done! Now hit START when you are ready!';

    // Place a new button element below grid to start game
    const startGame = document.createElement('input');
    const buildCont = document.getElementById('build-cont')
    startGame.id = 'start-game';
    startGame.type = 'button';
    startGame.value = 'START GAME';
    startGame.addEventListener('click', wipeBuilderBoard);
    buildCont.appendChild(startGame);
  }
  // Convert idx to x, y coords:
  const x = idxToCoords(i)[0];
  const y = idxToCoords(i)[1];

  // Place the ship on the players board
  const ship = playerShipArr[shipIdx[0]];
  const placedShip = boardPlayer.placeShip(ship, x, y, square, shipIdx);

  // Update the DOM message with carrier name
  if (placedShip === true) {
    const nextShip = playerShipArr[shipIdx[0]];
    const promptBuild = document.getElementById('player-prompt');
    promptBuild.innerHTML = 'NOW PLACE YOUR ' + nextShip.name.toUpperCase() + '!';
  }
}

/// / PART 4: SHOW GAMEBOARD FOR PLAY //// //////////////////////

const wipeBuilderBoard = () => {
  // Remove start-game button
  document.getElementById('start-game').remove();

  // Reset each square in the DOM
  const squares = document.querySelectorAll('.square'); // Select all box classes
  squares.forEach(square => {
    square.style['background-color'] = 'white';
  });

  buildGameBoards();
}

function buildGameBoards () {
  // Duplicate grid
  const outerCont = document.getElementById('outer-cont');
  const playerCont = document.getElementById('build-cont');
  const playerPrompt = document.getElementById('player-prompt');
  const botCont = playerCont.cloneNode(true);
  const botPrompt = botCont.firstChild;
  playerCont.id = 'player-cont';
  botCont.id = 'bot-cont';
  outerCont.appendChild(botCont);

  // Adjust grid styling on outer container, to make grids side-by-side
  outerCont.style['grid-template-columns'] = 'repeat(2, 1fr)';
  outerCont.style['grid-template-rows'] = '1fr 100px';

  // Rename bot's element children, as they were duplicated from the player
  botPrompt.id = 'bot-prompt'
  botCont.firstChild.nextSibling.id = 'bot-squares';

  // Add a new div to hold scores for each grid
  const playerScore = document.createElement('div');
  const botScore = document.createElement('div');
  playerScore.id = 'player-score';
  botScore.id = 'bot-score';
  playerScore.className = 'scores';
  botScore.className = 'scores';
  playerScore.innerHTML = 'Player Score: 0';
  botScore.innerHTML = 'Bot Score: 0';
  playerCont.appendChild(playerScore);
  botCont.appendChild(botScore);

  // Change prompts
  playerPrompt.innerHTML = 'FRIENDLY WATERS';
  botPrompt.innerHTML = 'ENEMY WATERS';

  gameLoop(player1, player2, idxToCoords) // Run the game loop
}
