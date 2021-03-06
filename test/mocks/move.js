const valid = {
  action: {
    player: 'player1',
    from: { id: 2 },
    to: { id: 1 },
    ship: { id: 3 } //moves ship 3 from system 1 to system 2
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
        { id: 5, color: 'yellow', size: 1, owner: 'player2' }
      ]
    },
    {
      id: 2,
      name: 'Sol',
      stars: [{ color: 'yellow', size: 2 }],
      ships: [
        { id: 4, color: 'yellow', size: 1, owner: 'player2' },
        { id: 3, color: 'red', size: 1, owner: 'player1' }
      ]
    }],
    'players': ['player1', 'player2'],
    'activePlayer': 0,
    'turn': null,
    'history': [/*{
      action: 'move',
      args: {
        player: 'player1',
        from: {id: 2},
        to: {id: 1},
        ship: {id: 3}
      },
      systems: []
    }*/]
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
        { id: 5, color: 'yellow', size: 1, owner: 'player2' },
        { id: 3, color: 'red', size: 1, owner: 'player1' }
      ]
    },
    {
      id: 2,
      name: 'Sol',
      stars: [{ color: 'yellow', size: 2 }],
      ships: [
        { id: 4, color: 'yellow', size: 1, owner: 'player2' },
      ]
    }],
    'players': ['player1', 'player2'],
    'activePlayer': 0,
    'turn': null,
    'history': [/*{
      action: 'move',
      args: {
        player: 'player1',
        from: {id: 2},
        to: {id: 1},
        ship: {id: 3}
      },
      systems: [{
        id: 1,
        name: 'Andoria',
        stars: [{ color: 'blue', size: 1 }],
        ships: [
          { id: 5, color: 'yellow', size: 1, owner: 'player2' }
        ]
      },
      {
        id: 2,
        name: 'Sol',
        stars: [{ color: 'yellow', size: 2 }],
        ships: [
          { id: 4, color: 'yellow', size: 1, owner: 'player2' },
          { id: 3, color: 'red', size: 1, owner: 'player1' }
        ]
      }]
    }*/]
  }
};

const systemLost = {
  action: {
    player: 'player1',
    from: { id: 2 },
    to: { id: 1 },
    ship: { id: 4 } //moves ship 3 from system 1 to system 2
  },
  state: {
    'bank': {
      'red': [0, 0, 0],
      'yellow': [0, 0, 0],
      'green': [0, 0, 0],
      'blue': [0, 0, 0]
    },
    'board': [{
      id: 1,
      name: 'Andoria',
      stars: [{ color: 'blue', size: 1 }],
      ships: [
        { id: 5, color: 'yellow', size: 1, owner: 'player2' }
      ]
    },
    {
      id: 2,
      name: 'Sol',
      stars: [{ color: 'yellow', size: 2 }],
      ships: [
        { id: 4, color: 'yellow', size: 1, owner: 'player2' }
      ]
    }],
    'players': ['player1', 'player2'],
    'activePlayer': 0,
    'turn': null,
    'history': []
  },
  result: {
    'bank': {
      'red': [0, 0, 0],
      'yellow': [0, 1, 0],
      'green': [0, 0, 0],
      'blue': [0, 0, 0]
    },
    'board': [{
      id: 1,
      name: 'Andoria',
      stars: [{ color: 'blue', size: 1 }],
      ships: [
        { id: 5, color: 'yellow', size: 1, owner: 'player2' },
        { id: 4, color: 'yellow', size: 1, owner: 'player2' }
      ]
    }],
    'players': ['player1', 'player2'],
    'activePlayer': 0,
    'turn': null,
    'history': []
  }
};

module.exports = { valid, systemLost };