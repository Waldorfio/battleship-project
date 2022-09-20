/* eslint-disable semi */
function factoryBoard () {
  return {
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
