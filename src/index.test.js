/* eslint-disable no-undef */
/* eslint-disable semi */


// const createBoard = require('./index');
const factoryShip = require('./factories/factoryShip');
const factoryBoard = require('./factories/factoryBoard');


// describe('testing gameloop', () => {
//   // Initialising

//   // Test 1: ship sinking
//   test('testing 10x10 gameboard...', () => {
//     expect(createBoard()).toBeDefined();
//   });
// });

describe('factoryShip testing', () => {
  // Initialising
  beforeAll(() => {
    ship = factoryShip(3, false, []);
    ship.initialise(); // Filling up the empty array with false values
  });
  // Test 1: ship sinking
  test('testing ship sinking...', () => {
    expect(ship.isSunk()).toBeFalsy();
  });
});