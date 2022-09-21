/* eslint-disable no-undef */
/* eslint-disable semi */


// const createBoard = require('./index');
const factoryShip = require('./factories/factoryShip');
const factoryBoard = require('./factories/factoryBoard');


describe('testing factoryBoard', () => {
  // // Initialising
  // beforeAll(() => {
  //   board = factoryBoard([]);
  //   ship = factoryShip(3, false, [], 'cruiser');
  //   board.initialise();
  //   ship.initialise();
  // });
  // // Test 1: Ship placed in bounds
  // test('place ship IN bounds of gameboard...', () => {
  //   expect(board.placeShip(ship, 1, 4)).toBeTruthy();
  // });
  // // Test 2: Ship placed out of bounds
  // test('place ship OUT bounds of gameboard...', () => {
  //   expect(board.placeShip(ship, 8, 2)).toBeFalsy();
  // });
});

describe('testing factoryShip', () => {
  // Initialising
  beforeAll(() => {
    ship = factoryShip(3, false, []);
    ship.initialise(); // Filling up the empty array with false values
  });
  // Test 1: ship sinking
  test('ship sinking...', () => {
    expect(ship.isSunk()).toBeFalsy();
  });
});