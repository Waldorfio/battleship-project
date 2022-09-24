/* eslint-disable semi */
function factoryShip (length, sunk, name, hit) {
  return {
    length,
    sunk,
    name,
    hit,
    isSunk (board) {
      console.log('***** IT RAN *******')
    }
  }
}

module.exports = factoryShip;
