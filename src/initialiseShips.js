/* eslint-disable semi */
const factoryShip = require('./factories/factoryShip');

const playerCarrier = factoryShip(5, false, 'carrier');
const playerBattleship = factoryShip(4, false, 'battleship');
const playerCruiser = factoryShip(3, false, 'cruiser');
const playerDestroyerOne = factoryShip(2, false, 'first destroyer');
const playerDestroyerTwo = factoryShip(2, false, 'second destroyer');
const playerSubOne = factoryShip(1, false, 'first sub');
const playerSubTwo = factoryShip(1, false, 'second sub');
const botCarrier = factoryShip(5, false, 'carrier');
const botBattleship = factoryShip(4, false, 'battleship');
const botCruiser = factoryShip(3, false, 'cruiser');
const botDestroyerOne = factoryShip(2, false, 'first destroyer');
const botDestroyerTwo = factoryShip(2, false, 'second destroyer');
const botSubOne = factoryShip(1, false, 'first sub');
const botSubTwo = factoryShip(1, false, 'second sub');

// playerCarrier.initialise();
// playerBattleship.initialise();
// playerCruiser.initialise();
// playerDestroyerOne.initialise();
// playerDestroyerTwo.initialise();
// playerSubOne.initialise();
// playerSubTwo.initialise();
// botCarrier.initialise();
// botBattleship.initialise();
// botCruiser.initialise();
// botDestroyerOne.initialise();
// botDestroyerTwo.initialise();
// botSubOne.initialise();
// botSubTwo.initialise();

const playerShipArr = [playerCarrier, playerBattleship,
  playerCruiser, playerDestroyerOne, playerDestroyerTwo,
  playerSubOne, playerSubTwo]

module.exports = playerShipArr;
