/* eslint-disable semi */
function factoryBoard (boardArr) {
  return {
    boardArr,
    initialise () {
      const boardArr = [];
      for (let i = 0; i < 10; i++) {
        boardArr.push([])
        for (let j = 0; j < 10; j++) {
          boardArr[i].push([]);
        }
      }
      return boardArr
    },
    placeShip (ship, x, y) {
      if (ship.length + y < 10) { // If the ship will not be out of bounds
        for (let i = 0; i < ship.length; i++) {
          boardArr[x][y + i] = ship
        }
      } else { console.log('ship will not fit') }
    },
    receiveAttack (idx) {
    }
  }
}

module.exports = factoryBoard
