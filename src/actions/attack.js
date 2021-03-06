const {
  playerHasColorAbility,
  findSystem,
  largestShipInSystem,
  findShip,
  actionFailure,
  actionSuccess
} = require('../util');

const { error } = require('../strings.js');

function attack(state, args) {
  const { board } = state;
  const { system, ship, player, color } = args;
  const [targetSystem, otherSystems] = findSystem(board, system);
  if (targetSystem === null) {
    actionFailure(state, error.invalidSystem);
  }
  const [targetShip, otherShips] = findShip(targetSystem.ships, ship);
  if (!targetShip) {
    return actionFailure(state, error.invalidShip);
  }
  if (playerHasColorAbility(targetSystem, player, color)) {
    return actionFailure(state, error.invalidAccessRed);
  }
  if (largestShipInSystem(targetSystem, player) < targetShip.size) {
    return actionFailure(state, error.shipAttackSize);
  }
  const updatedShip = { ...targetShip, owner: player };
  const updatedSystem = {
    ...targetSystem,
    ships: [...otherShips, updatedShip]
  };
  //todo update history
  const updatedState = { ...state, board: [...otherSystems, updatedSystem], history: [/*'todo'*/] };
  return actionSuccess(updatedState);
}

module.exports = attack;