const valid = {
  action: {
    player: 'player1',
    systemId: 1,
    shipId: 3,
    color: 'red' //captures ship 3 in system 1 
  }, 
  state: {
    'bank': {
      'red': [3, 3, 3],
      'yellow': [2, 3, 3],
      'green': [3, 3, 3],
      'blue': [2, 3, 3]
    },
    'board': [{
      id: 1,
      name: 'Andoria',
      stars: [{ color: 'blue', size: 1 }],
      ships: [
        { id: 3, color: 'yellow', size: 1, owner: 'player2' },
        { id: 3, color: 'red', size: 1, owner: 'player1' }
      ]
    }],
    'players': ['player1', 'player2'],
    'activePlayer': 0,
    'turn': null,
    'history': []
  },
  result: {
    'bank': {
      'red': [3, 3, 3],
      'yellow': [2, 3, 3],
      'green': [3, 3, 3],
      'blue': [2, 3, 3]
    },
    'board': [{
      id: 1,
      name: 'Andoria',
      stars: [{ color: 'blue', size: 1 }],
      ships: [
        { id: 3, color: 'yellow', size: 1, owner: 'player1' },
        { id: 3, color: 'red', size: 1, owner: 'player1' }
      ]
    }],
    'players': ['player1', 'player2'],
    'activePlayer': 0,
    'turn': null,
    'history': [{
      'action': 'attack',
      'args':{
        player: 'player1',
        systemId: 1,
        shipId: 3,
        color: 'red'
      },
      systems: [{
        id: 1,
        name: 'Andoria',
        stars: [{ color: 'blue', size: 1 }],
        ships: [
          { id: 3, color: 'yellow', size: 1, owner: 'player2' },
          { id: 3, color: 'red', size: 1, owner: 'player1' }
        ]
      }]
    }]
  }
};

module.exports = { valid };