/* eslint-disable semi */

function gameLoop (p1, p2, xy) {
  console.log('running gameLoop...');
  // Extract elements
  const squares = document.getElementById('bot-squares').childNodes; // Select all box classes
  let idx = 0; // Create an index to keep track of square numbers
  squares.forEach(square => {
    square.addEventListener('click', firedShot.bind(this, square, p2, xy(idx)));
    idx += 1;
  });
}

function firedShot (square, p2, xy) {
  square.style['background-color'] = 'blue';
  const x = xy[0];
  const y = xy[1];
  p2.gameBoard.receiveAttack(x, y);
  console.log(p2.gameBoard.boardArr);
}

module.exports = gameLoop;
