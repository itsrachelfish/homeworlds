const { expect } = require('chai');
const game = require('../src/util');

describe('init', function () {
  describe('game state', function () {
    it('can create a fresh game state', function () {
      const state = game.initState();
      expect(state.bank);
      expect(state.board);
      expect(state.players);
      expect(state.activePlayer).to.equal(0);
    });
  });
}); 