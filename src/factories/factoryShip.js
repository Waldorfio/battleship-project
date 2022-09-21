/* eslint-disable semi */
function factoryShip (length, sunk, statusArr, name) {
  return {
    length,
    sunk,
    statusArr,
    name,
    initialise () {
      for (let i = 0; i < length; i++) { statusArr.push(false) };
    },
    hit (index) {
      statusArr[index] = 'hit!'
      console.log(statusArr)
    },
    isSunk () {
      for (let i = 0; i < length; i++) {
        if (statusArr[i] === 'hit!') {
          if (i === length - 1) { return true } // Return true if you have reached last array elem
          continue
        } else if (statusArr[i] !== 'hit!') { // Return false if hit
          return false
        }
      }
    }
  }
}
// let ship = factoryShip(3, false, []);

module.exports = factoryShip;
