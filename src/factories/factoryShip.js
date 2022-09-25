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
        return true
      } else if (this.hit !== this.length) {
        console.log(this.hit + '/' + this.length)
        return false
      }
    }
  }
}

function updateScores (scoreDiv) {
  const score = parseInt(scoreDiv.innerHTML.split('')[scoreDiv.innerHTML.length - 1]) + 1;
  scoreDiv.innerHTML = scoreDiv.innerHTML.slice(0, -1) + score; // Slice off the last score
  if (score === 7) {
    const winner = scoreDiv.id.split('-')[0].toUpperCase();
    alert('THE ' + winner + ' WINS!');
    // Create a RESTART GAME button
    const restartGame = document.createElement('input');
    restartGame.id = 'restart-game';
    restartGame.type = 'button';
    restartGame.value = 'RESTART GAME';
    restartGame.addEventListener('click', () => { location.reload() });
    document.getElementById('outer-cont').appendChild(restartGame);
  }
}

module.exports = factoryShip;
