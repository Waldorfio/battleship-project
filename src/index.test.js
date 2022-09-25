/* eslint-disable no-undef */
/* eslint-disable semi */

const factoryShip = require('./factories/factoryShip');
const factoryBoard = require('./factories/factoryBoard');

ship = factoryShip(5, false, 'carrier', 0);
square = '<div class="square" style="background-color: blue;"></div>';

describe('testing factoryBoard', () => {
  // Initialising
  beforeAll(() => {
    board = factoryBoard([]);
    board.reset();
  });
  // Test 1: Ship placed out of bounds
  test('place ship OUT OF bounds of gameboard...', () => {
    expect(board.placeShip(ship, 1, 8, square, 0)).toBeFalsy();
  });
});

// Factory Ship testing modules
describe('testing factoryShip', () => {
  // Test 1: ship sinking
  test('ship sinking...', () => {
    expect(ship.isSunk('<div id="player-score" class="scores"></div>')).toBeFalsy();
  });
});
