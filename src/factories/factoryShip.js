/* eslint-disable semi */
function factoryShip (length, sunk, name) {
  return {
    length,
    sunk,
    // statusArr,
    name,
    // initialise () {
    //   for (let i = 0; i < length; i++) { statusArr.push(i) };
    // },
    hit (position) {
      position = 'HIT';
    },
    isSunk (board) {
      // Check if any instances of the ship is left
      for (let i = 0; i < board.length - 1; i++) {
        if (board[i].name === this.name) {
          console.log('nope, not sunk yet')
          // return false
        }
        console.log('couldnt find... SUNK!');
      // return true
      }
      // for (let i = 0; i < length; i++) {
      //   if (statusArr[i] === 'hit!') {
      //     if (i === length - 1) { return true } // Return true if you have reached last array elem
      //     continue
      //   } else if (statusArr[i] !== 'hit!') { // Return false if hit
      //     return false
      //   }
      // }
    }
  }
}

module.exports = factoryShip;
