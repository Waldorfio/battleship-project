/* eslint-disable semi */
const factoryShip = require('./factories/factoryShip');

const playerCarrier = factoryShip(5, false, 'carrier', false);
const playerBattleship = factoryShip(4, false, 'battleship', false);
const playerCruiser = factoryShip(3, false, 'cruiser', false);
const playerDestroyerOne = factoryShip(2, false, 'first destroyer', false);
const playerDestroyerTwo = factoryShip(2, false, 'second destroyer', false);
const playerSubOne = factoryShip(1, false, 'first sub', false);
const playerSubTwo = factoryShip(1, false, 'second sub', false);

const botCarrier = factoryShip(5, false, 'carrier', false);
const botBattleship = factoryShip(4, false, 'battleship', false);
const botCruiser = factoryShip(3, false, 'cruiser', false);
const botDestroyerOne = factoryShip(2, false, 'first destroyer', false);
const botDestroyerTwo = factoryShip(2, false, 'second destroyer', false);
const botSubOne = factoryShip(1, false, 'first sub', false);
const botSubTwo = factoryShip(1, false, 'second sub', false);

const playerShipArr = [playerCarrier, playerBattleship,
  playerCruiser, playerDestroyerOne, playerDestroyerTwo,
  playerSubOne, playerSubTwo]
const botShipArr = [botCarrier, botBattleship,
  botCruiser, botDestroyerOne, botDestroyerTwo,
  botSubOne, botSubTwo]

module.exports = [playerShipArr, botShipArr];
