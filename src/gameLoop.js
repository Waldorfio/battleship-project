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
  if (p2.gameBoard.boardArr[x][y] === 'HIT' || p2.gameBoard.boardArr[x][y] === 'MISS') {
    alert('Already fired here. Try again.');
  } else {
    p2.gameBoard.receiveAttack(x, y, square);
    console.log(p2.gameBoard.boardArr);
  }
  botFireShot(p1, idxToCoords);
}

function botFireShot (p1, idxToCoords) {
  // Bot fires a shot, update the players object/DOM
  const idx = Math.floor(Math.random() * 100);
  const x = idxToCoords(idx)[0];
  const y = idxToCoords(idx)[1];
  const squares = document.getElementById('player-squares').childNodes;
  if (p1.gameBoard.boardArr[x][y] === 'HIT' || p1.gameBoard.boardArr[x][y] === 'MISS') {
    console.log('Bot made an illegal move. Trying again.');
    botFireShot(p1, idxToCoords);
  } else {
    p1.gameBoard.receiveAttack(x, y, squares[idx]);
  }
}

module.exports = gameLoop;
