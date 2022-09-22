/* eslint-disable semi */
import './style.css';
const factoryShip = require('./factories/factoryShip');
const factoryBoard = require('./factories/factoryBoard')
const factoryPlayer = require('./factories/factoryPlayer');

console.clear();
console.log('-----------');

function idxToCoords (idx) { // Function to convert an index, to an x,y coord
  if (idx < 10) { // You are in the first row
    const x = idx;
    const y = 0;
    return [parseInt(x), parseInt(y)];
  } else if (idx >= 10) { // Otherwise split the numbers
    const x = idx.toString()[0];
    const y = idx.toString()[1];
    return [parseInt(x), parseInt(y)];
  }
}

/// / PART 1: INITIALISE PLAYERS AND BOARDS ////////////////

// Player 1 Initialise
const boardPlayer = factoryBoard([]);
boardPlayer.initialise(); // Create an empty 10x10 array
// Player 2 Initialise
const boardBot = factoryBoard([]);
boardBot.initialise();

const player1 = factoryPlayer('placeholder', boardPlayer);
const player2 = factoryPlayer('computer bot', boardBot);

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
  promptBuild.id = 'prompt-build';
  squareCont.id = 'square-cont';
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

const playerCarrier = factoryShip(5, false, [], 'carrier');
const playerBattleship = factoryShip(4, false, [], 'battleship');
const playerCruiser = factoryShip(3, false, [], 'cruiser');
const playerDestroyerOne = factoryShip(2, false, [], 'first destroyer');
const playerDestroyerTwo = factoryShip(2, false, [], 'second destroyer');
const playerSubOne = factoryShip(1, false, [], 'first sub');
const playerSubTwo = factoryShip(1, false, [], 'second sub');
const botCarrier = factoryShip(5, false, [], 'carrier');
const botBattleship = factoryShip(4, false, [], 'battleship');
const botCruiser = factoryShip(3, false, [], 'cruiser');
const botDestroyerOne = factoryShip(2, false, [], 'first destroyer');
const botDestroyerTwo = factoryShip(2, false, [], 'second destroyer');
const botSubOne = factoryShip(1, false, [], 'first sub');
const botSubTwo = factoryShip(1, false, [], 'second sub');

playerCarrier.initialise();
playerBattleship.initialise();
playerCruiser.initialise();
playerDestroyerOne.initialise();
playerDestroyerTwo.initialise();
playerSubOne.initialise();
playerSubTwo.initialise();
botCarrier.initialise();
botBattleship.initialise();
botCruiser.initialise();
botDestroyerOne.initialise();
botDestroyerTwo.initialise();
botSubOne.initialise();
botSubTwo.initialise();

const playerShipArr = [playerCarrier, playerBattleship,
  playerCruiser, playerDestroyerOne, playerDestroyerTwo,
  playerSubOne, playerSubTwo]
const shipIdx = [0];

// Control Ship Placement
function clickedSquare (i, square, shipIdx) {
  // Check if placed all ships or not
  if (shipIdx[0] === 6) {
    document.getElementById('prompt-build').innerHTML = 'Done! Now hit START when you are ready!';
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
    const promptBuild = document.getElementById('prompt-build');
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
  // Duplicate grid
  const botCont = document.getElementById('build-cont').cloneNode(true);
  const outerCont = document.getElementById('outer-cont');
  botCont.id = 'bot-cont';
  outerCont.appendChild(botCont);
  // Adjust grid styling on outer container, to make grids side-by-side
  outerCont.style['grid-template-columns'] = 'repeat(2, 1fr)';
}

// Sub logic 2.1: Randomize AI grid

/// / PART 4: PLAY GAME //// //////////////////////
