/* eslint-disable semi */
function factoryBoard (boardArr) {
  return {
    boardArr,
    reset () {
      for (let i = 0; i < 10; i++) {
        boardArr.push([])
        for (let j = 0; j < 10; j++) {
          boardArr[i].push([]);
        }
      }
      return boardArr
    },
    placeShip (ship, x, y, square, shipIdx) {
      if (ship.length + y < 11) { // If the ship will not be out of bounds
        // Place ship in array
        for (let k = 0; k < ship.length; k++) {
          this.boardArr[x][y + k] = ship;
        }

        // Update DOM to show ship
        for (let j = 0; j < ship.length; j++) {
          square.style.backgroundColor = 'grey';
          square = square.nextSibling;
        }

        // Increment shipIdx, so we know to place the next ship
        shipIdx[0] = shipIdx[0] + 1;
        return true
      } else {
        alert('Ship will not fit! Try again.')
        return false
      }
    },
    receiveAttack (x, y, square) {
      if (this.boardArr[x][y].length === 0) { // IF MISSED
        this.boardArr[x][y] = 'MISS';
        square.style.backgroundColor = 'blue';
      } else if (this.boardArr[x][y].length !== 0) { // IF HIT
        this.boardArr[x][y].hit = this.boardArr[x][y].hit + 1;
        square.style.backgroundColor = 'red';
      }
    }
  }
}

module.exports = factoryBoard
