/* eslint-disable semi */
const factoryShip = require('./factories/factoryShip');

const playerCarrier = factoryShip(5, false, 'carrier', 0);
const playerBattleship = factoryShip(4, false, 'battleship', 0);
const playerCruiser = factoryShip(3, false, 'cruiser', 0);
const playerDestroyerOne = factoryShip(2, false, 'first destroyer', 0);
const playerDestroyerTwo = factoryShip(2, false, 'second destroyer', 0);
const playerSubOne = factoryShip(1, false, 'first sub', 0);
const playerSubTwo = factoryShip(1, false, 'second sub', 0);

const botCarrier = factoryShip(5, false, 'carrier', 0);
const botBattleship = factoryShip(4, false, 'battleship', 0);
const botCruiser = factoryShip(3, false, 'cruiser', false);
const botDestroyerOne = factoryShip(2, false, 'first destroyer', 0);
const botDestroyerTwo = factoryShip(2, false, 'second destroyer', 0);
const botSubOne = factoryShip(1, false, 'first sub', 0);
const botSubTwo = factoryShip(1, false, 'second sub', 0);

const playerShipArr = [playerCarrier, playerBattleship,
  playerCruiser, playerDestroyerOne, playerDestroyerTwo,
  playerSubOne, playerSubTwo]
const botShipArr = [botCarrier, botBattleship,
  botCruiser, botDestroyerOne, botDestroyerTwo,
  botSubOne, botSubTwo]

module.exports = [playerShipArr, botShipArr];
