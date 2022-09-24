/* eslint-disable semi */
function factoryShip (length, sunk, name, hit) {
  return {
    length,
    sunk,
    name,
    hit,
    isSunk () {
      if (this.hit === this.length) {
        console.log(this.name.toUpperCase() + ' SUNK!')
      } else if (this.hit !== this.length) {
        console.log(this.hit + '/' + this.length)
      }
    }
  }
}

module.exports = factoryShip;
