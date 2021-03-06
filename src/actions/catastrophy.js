const {
  standardValidation,
  countPieces,
  countPiecesOfColor,
  returnToBank,
  findSystem,
  findShip,
  actionSuccess,
  actionFailure
} = require('../util.js');
const _ = require('lodash');
const { error } = require('../strings.js');


function catastrophy(state, args) {
  const validationError = standardValidation(state, args);
  if (validationError) {
    return actionFailure(state, validationError);
  }

  const { board, bank } = state;
  const { system, color } = args;
  const [targetSystem, otherSystems] = findSystem(board, system);

  if (!targetSystem) {
    return actionFailure(state, error.invalidSystem);
  }

  const piecesToCount = [
    ...targetSystem.ships,
    ...targetSystem.stars
  ];

  if (countPiecesOfColor(piecesToCount, color) < 4) {
    return actionFailure(state, error.catastrophyFailed);
  } else {
    // we can catastrophy. remove pieces from system
    const [removedStars, remainingStars] = _.partition(targetSystem.stars, (star) => star.color === color);
    const [removedShips, remainingShips] = _.partition(targetSystem.ships, (ship) => ship.color === color);
    if (remainingStars.length === 0 || remainingShips.length === 0) {
      // remove all pieces and return to bank
      const piecesToReturn = countPieces([...targetSystem.stars, ...targetSystem.ships]);
      const updatedBank = returnToBank(bank, piecesToReturn);
      // const updatedHistory = [...state.history, { systems: [targetSystem], args, action: 'catastrophy' }];
      // create new state;
      return actionSuccess(Object.assign({}, state, {
        board: otherSystems,
        bank: updatedBank,
        //history: updatedHistory
      }));
    } else {
      const piecesToReturn = countPieces([...removedStars, ...removedShips]);
      const updatedBank = returnToBank(bank, piecesToReturn);
      const updatedSystem = Object.assign({}, targetSystem, {
        stars: remainingStars,
        ships: remainingShips
      });
      const updatedBoard = [...otherSystems, updatedSystem];
      // const updatedHistory = [...state.history, { args, action: 'catastrophy', systems: [targetSystem] }];
      return actionSuccess(Object.assign({}, state, {
        board: updatedBoard,
        bank: updatedBank,
        // history: updatedHistory
      }));
      //system is not destroyed. handle it.
      //const piecesToReturn = countPieces([...targetSystem.stars, ...targetSystem.ships]);
      //updatedBank = returnToBank(bank, piecesToReturn);
      //updatedBoard = state.board.filter((targetSystem) => targetSystem.id !== system.id)

    }

  }


}

module.exports = catastrophy;