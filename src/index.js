/* eslint-disable semi */
import './style.css';

console.clear();
console.log('-----------');

//// LOGIC 1: LANDING PAGE

wipeLanding = () => {
    // Extract Player Name
    const playerName = document.getElementById('player-name').value;
    // Wipe Landing Page
    const landingPage = document.getElementById('landing-cont');
    landingPage.innerHTML = '';
    console.log('playerName: '+playerName);
    buildBoard()
}

// Add START GAME button logic
const startButton = document.getElementById('start-button');
startButton.addEventListener('click', wipeLanding);

//// LOGIC 2: BUILD BOARD
function buildBoard() {
    // Build Board Container
    const buildCont = document.createElement('div');
    buildCont.id = 'build-cont'
    document.getElementById('outer-cont').appendChild(buildCont);
    // Greet Player personally
    const promptBuild = document.createElement('div');
    promptBuild.id = 'prompt-build';
    promptBuild.innerHTML = 'Build your board TEST##';
    buildCont.appendChild(promptBuild);
    // Build the grid
    const squareCont = document.createElement('div');
    squareCont.id = 'square-cont';
    buildCont.appendChild(squareCont);
    for (i=0; i<100; i++) {
        const square = document.createElement('div');
        square.className = 'square';
        square.addEventListener('click', clickedSquare.bind(this,i));
        squareCont.appendChild(square);
    }
}

function clickedSquare(i) {
    console.log('index: '+i)
}
