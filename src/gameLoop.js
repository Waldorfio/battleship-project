/* eslint-disable semi */

function gameLoop (p1, p2, xy) {
  console.log('running gameLoop...');
  // Extract elements
  const squares = document.getElementById('bot-squares').childNodes; // Select all box classes
  let idx = 0; // Create an index to keep track of square numbers
  // Add an eventlistener to each square, for fired shots
  squares.forEach(square => {
    square.addEventListener('click', firedShot.bind(this, square, p2, xy(idx)));
    idx += 1;
  });
}

function firedShot (square, p2, xy) {
  const x = xy[0];
  const y = xy[1];
  if (p2.gameBoard.boardArr[x][y] === 'HIT' || p2.gameBoard.boardArr[x][y] === 'MISS') {
    alert('Already fired here. Try again.');
  } else {
    p2.gameBoard.receiveAttack(x, y, square);
    console.log(p2.gameBoard.boardArr);
  }
}

module.exports = gameLoop;
