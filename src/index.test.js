/* eslint-disable semi */
const factoryBoard = require('./factories/factoryBoard');
const factoryShip = require('./factories/factoryShip');

// Describe block for ship factory
describe('factoryShip testing', () => {
  beforeAll(() => {
    ship = factoryShip(3, false, []);
    ship.initialise(); // Filling up the empty array with false values
  });

  test('testing ship sinking...', () => {
    expect(ship.isSunk()).toBeFalsy();
  });
});
