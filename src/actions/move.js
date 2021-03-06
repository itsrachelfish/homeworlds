
//{
// player: 'player1',
// from: System
// to: System,
// ship: Ship
//}

const { 
  findSystem, 
  findShip, 
  actionFailure, 
  actionSuccess,
  returnSystemToBank,
  createSystem
 } = require('../util');
const { error } = require('../strings');

function move(state, args) {
  // validate if move can be made
  const { board, bank } = state;
  const { from, to, ship } = args;
  const [startSystem, otherSystems] = findSystem(board, from);
  
  // validate starting system exists 
  // todo move validation
  if (!startSystem) {
    return actionFailure(state, error.invalidSystem);
  }
  
  // find the ship we are trying to move
  const [targetShip, otherShips] = findShip(startSystem.ships, ship);
  
  // fail if target ship is not in the starting system
  if (!targetShip) {
    return actionFailure(state, error.invalidShip);
  }

  // see if we can find the destination system
  let [endSystem, remainingSystems] = findSystem(otherSystems, to);  
  
  // if not, attempt to create one
  endSystem = endSystem || createSystem(bank, to);

  // get a system from the bank if needed
  if(!endSystem){
    return actionFailure(state, error.invalidSystem);
  }

  const startStarSizes = startSystem.stars.map((star) => star.size);
  const endStarSizes = endSystem.stars.map((star) => star.size);
  
  // cast star object to bool if existant.
  const starsHaveCommonSize = !!startStarSizes.find((startStarSize) => {
    return endStarSizes.find((targetSize) => targetSize === startStarSize);
  });

  if (starsHaveCommonSize) {
    return actionFailure(state, error.invalidMove);
  }


  // check to see if starting system is still occupied
  if (otherShips.length) {
    const updatedBoard = [
      ...remainingSystems,
      {
        ...endSystem,
        ships: [
          ...endSystem.ships,
          targetShip
        ]
      },
      {
        ...startSystem,
        ships: [...otherShips]
      }
    ];
    return actionSuccess({ ...state, board: updatedBoard });
  } else {
    // otherwise, return system to bank
    const updatedBank = returnSystemToBank(bank, {
      ...startSystem,
      ships: []
    });

    const updatedBoard = [
      ...remainingSystems,
      {
        ...endSystem,
        ships: [
          ...endSystem.ships,
          targetShip
        ]
      }
    ];

    return actionSuccess({ ...state, bank: updatedBank, board: updatedBoard });
  }
}

module.exports = move;