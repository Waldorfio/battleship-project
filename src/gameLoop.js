/* eslint-disable semi */
function gameLoop () {
    console.log('running gameLoop')
// Extract elements
  const squares = document.querySelectorAll(':bot-squares > .square'); // Select all box classes
  squares.forEach(square => {
    square.addEventListener('click', firedShot.bind(this, square));
  });
}

const firedShot (square) {
    console.log('clicked!')
  square.style['background-color'] = 'red';
}

module.exports = gameLoop;
