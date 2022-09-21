/* eslint-disable semi */
import './style.css';
const factoryShip = require('./factories/factoryShip');
const factoryBoard = require('./factories/factoryBoard')
const factoryPlayer = require('./factories/factoryPlayer')

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
const shipPlayer = factoryShip(3, false, []);
boardPlayer.initialise(); // Create an empty 10x10 array
shipPlayer.initialise(); // Filling up the empty array with false values
// Player 2 Initialise
const boardBot = factoryBoard([]);
const shipBot = factoryShip(3, false, []);
boardBot.initialise();
shipBot.initialise();

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
  promptBuild.innerHTML = 'BUILD YOUR BOARD ' + player1.name + '!';
  document.getElementById('outer-cont').appendChild(buildCont);
  buildCont.appendChild(promptBuild);
  buildCont.appendChild(squareCont);
  for (let i = 0; i < 100; i++) {
    const square = document.createElement('div');
    square.className = 'square';
    square.addEventListener('click', clickedSquare.bind(this, i, square));
    squareCont.appendChild(square);
  }
}

// playerCarrier 5
// playerBattleship: 4
// playerCruiser: 3
// playerDestroyerOne: 2 (two of these)
// playerDestroyerTwo: 2 (two of these)
// playerSubOne: 1 (two of these)
// playerSubTwo: 1 (two of these)

const playerCarrier = factoryShip(5, false, []);
const playerBattleship = factoryShip(4, false, []);
const playerCruiser = factoryShip(3, false, []);
const playerDestroyerOne = factoryShip(2, false, []);
const playerDestroyerTwo = factoryShip(2, false, []);
const playerSubOne = factoryShip(1, false, []);
const playerSubTwo = factoryShip(1, false, []);

const botCarrier = factoryShip(5, false, []);
const botBattleship = factoryShip(4, false, []);
const botCruiser = factoryShip(3, false, []);
const botDestroyerOne = factoryShip(2, false, []);
const botDestroyerTwo = factoryShip(2, false, []);
const botSubOne = factoryShip(1, false, []);
const botSubTwo = factoryShip(1, false, []);

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

// Control Ship Placement
function clickedSquare (i, square) {
  // Convert idx to x, y coords:
  const x = idxToCoords(i)[0];
  const y = idxToCoords(i)[1];
  // Place the ship on the players board
  console.log('placed carrier at: ' + x + ', ' + y);
  boardPlayer.placeShip(playerCarrier, x, y);
  // Update DOM to show ship
  const currentShip = playerCarrier.length;
  for (let j = 0; j < currentShip; j++) {
    square.style['background-color'] = 'grey';
    square = square.nextSibling;
  }
}

// Sub logic 2.1: Randomize AI grid

/// / PART 4: PLAY GAME //// //////////////////////
