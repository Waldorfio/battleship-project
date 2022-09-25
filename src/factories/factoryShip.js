/* eslint-disable semi */
function factoryShip (length, sunk, name, hit) {
  return {
    length,
    sunk,
    name,
    hit,
    isSunk (scoreDiv) {
      if (this.hit === this.length) {
        console.log(this.name.toUpperCase() + ' SUNK!');
        updateScores(scoreDiv);
      } else if (this.hit !== this.length) {
        console.log(this.hit + '/' + this.length)
      }
    }
  }
}

function updateScores (scoreDiv) {
  const score = parseInt(scoreDiv.innerHTML.split('')[scoreDiv.innerHTML.length - 1]) + 1;
  scoreDiv.innerHTML = scoreDiv.innerHTML.slice(0, -1) + score; // Slice off the last score
}

module.exports = factoryShip;
