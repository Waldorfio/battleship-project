/* eslint-disable semi */
function factoryBoard (boardArr) {
  return {
    boardArr,
    initialise () {
      for (let i = 0; i < 10; i++) {
        boardArr.push([])
        for (let j = 0; j < 10; j++) {
          boardArr[i].push([]);
        }
      }
      return boardArr
    },
    placeShip (ship, x, y) {
      if (ship.length + y < 11) { // If the ship will not be out of bounds
        // Place ship in array
        for (let k = 0; k < ship.length; k++) {
          boardArr[x][y + k] = ship;
        }
        // console.log(boardArr);
        return true
      } else {
        console.log('Ship will not fit!')
        return false
      }
    },
    receiveAttack (idx) {
    }
  }
}

module.exports = factoryBoard
