/* eslint-disable semi */

function gameLoop (p1, p2, idxToCoords) {
  console.log('running gameLoop...');
  // Extract elements
  const squares = document.getElementById('bot-squares').childNodes; // Select all box classes
  let idx = 0; // Create an index to keep track of square numbers
  // Add an eventlistener to each square, for fired shots
  squares.forEach(square => {
    square.addEventListener('click', playerFireShot.bind(this, square, p1, p2, idx, idxToCoords));
    idx += 1;
  });
}

function playerFireShot (square, p1, p2, idx, idxToCoords) {
  // Player fires a shot, update the bots object/DOM
  const x = idxToCoords(idx)[0];
  const y = idxToCoords(idx)[1];
  if (square.style.backgroundColor !== 'white') {
    alert('Already fired here. Try again.');
  } else {
    p2.gameBoard.receiveAttack(x, y, square);
    try { // Try checking if the ship has sunk (REFACTOR LATER)
      p2.gameBoard.boardArr[x][y].isSunk();
    } catch (error) {
    }
  }
  botFireShot(p1, idxToCoords);
}

function botFireShot (p1, idxToCoords) {
  // Bot fires a shot, update the players object/DOM
  const idx = Math.floor(Math.random() * 100);
  const x = idxToCoords(idx)[0];
  const y = idxToCoords(idx)[1];
  const squares = document.getElementById('player-squares').childNodes;
  if (squares[idx].style.backgroundColor !== 'white') {
    console.log('Bot made an illegal move. Trying again.');
    botFireShot(p1, idxToCoords);
  } else {
    p1.gameBoard.receiveAttack(x, y, squares[idx]);
    try { // Try checking if the ship has sunk (REFACTOR LATER)
      p1.gameBoard.boardArr[x][y].isSunk();
    } catch (error) {
    }
  }

  // // Finally, update the Scores
  // updateScores(pScore, bScore);
}

// function updateScores (pScore, bScore) {
//   const playerScore = document.createElement('div');
//   const botScore = document.createElement('div');
//   playerScore.innerHTML = 'Player Score: ' + pScore;
//   botScore.innerHTML = 'Bot Score: ' + bScore;
// }

module.exports = gameLoop;
