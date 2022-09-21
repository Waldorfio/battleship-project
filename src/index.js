/* eslint-disable semi */
import './style.css';
const factoryShip = require('./factories/factoryShip');
const factoryBoard = require('./factories/factoryBoard')
const factoryPlayer = require('./factories/factoryPlayer')

console.clear();
console.log('-----------');

/// / PART 1: INITIALISE PLAYERS AND BOARDS ////////////////

// Player 1 Initialise
const boardPlayer = factoryBoard();
const shipPlayer = factoryShip(3, false, []);
boardPlayer.initialise(); // Create an empty 10x10 array
shipPlayer.initialise(); // Filling up the empty array with false values
// Player 2 Initialise
const boardBot = factoryBoard();
const shipBot = factoryShip(3, false, []);
boardBot.initialise();
shipBot.initialise();

const player1 = factoryPlayer('placeholder', boardPlayer);
const player2 = factoryPlayer('computer bot', boardBot);

/// / PART 2: LANDING PAGE //// ///////////////////////////

// Add START GAME button logic
const wipeLanding = () => { // Initialise eventListener arrow function
  // Extract Player Name
  const playerName = document.getElementById('player-name').value;
  console.log('playerName: ' + playerName);
  // Wipe Landing Page
  const landingPage = document.getElementById('landing-cont');
  landingPage.remove();
  // Save Player names
  player1.name = playerName.toUpperCase();
  // Build the next page
  buildBoardDOM ()
}
const startButton = document.getElementById('start-button');
startButton.addEventListener('click', wipeLanding);

/// / PART 3: BUILD YOUR BOARD //// //////////////////////

// a
function buildBoardDOM () {
  // Build Board Container
  const buildCont = document.createElement('div');
  buildCont.id = 'build-cont'
  document.getElementById('outer-cont').appendChild(buildCont);
  // Greet Player personally
  const promptBuild = document.createElement('div');
  promptBuild.id = 'prompt-build';
  promptBuild.innerHTML = 'BUILD YOUR BOARD '+player1.name+'!';
  buildCont.appendChild(promptBuild);
  // Build the grid
  const squareCont = document.createElement('div');
  squareCont.id = 'square-cont';
  buildCont.appendChild(squareCont);
  for (let i = 0; i < 100; i++) {
    const square = document.createElement('div');
    square.className = 'square';
    square.addEventListener('click', clickedSquare.bind(this, i));
    squareCont.appendChild(square);
  }
}

function clickedSquare (i) {
  console.log('index: ' + i)
}

// Sub logic 2.1: Randomize AI grid

/// / PART 4: PLAY GAME //// //////////////////////
