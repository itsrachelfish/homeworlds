const {expect, assert} = require('chai');
const deepfreeze = require('deepfreeze');


const game = require('../game.js');
const actions = require('../actions.js');
const mockActions = require('./mocks/actions.js');
const mockState = require('./mocks/state.js');

function universalValidators(action){
  it('will update history');
  it('will fail if its not the current players turn')
  it('will fail if another (non-catastrophy or sacrifice[Start] ) turn action has already made')
}

function standardActionValidators(action){
  it('can perform a colored action if in a sacrifice of said color')
  it('can perform a colored action if player has access to the color')
  it('will fail to perform a colored action in invalid cases')
}

describe('actions', function(){
  describe('chooseHomeworld', function(){
    universalValidators('chooseHomeworld');
    it('can create a homeworld', function(){
      const initialState = game.initState();
      deepfreeze(initialState);
      const actionResponse = actions.chooseHomeworld(initialState, mockActions.chooseHomeworld.valid.B3Y2SG3);
      const {bank} = actionResponse.state
      
      // did call report success
      assert.isNull(actionResponse.err)
      expect(bank.blue[2]).to.equal(initialState.bank.blue[2]-1);
      expect(bank.yellow[1]).to.equal(initialState.bank.yellow[1]-1);
      expect(bank.green[2]).to.equal(initialState.bank.yellow[1]-1);
    })
    it('will fail if its not the current players turn')
    it('will fail if there are not enough pieces in the bank')
    it('will fail if exactly two stars are not provided')
    it('will fail if exactly one ship is not provided')
  });
  describe('endTurn', function(){
    it('will updateCurrentPlayer')
    it('will reset sacrifice state')
  });
  describe('concede', function(){
    it('will fail if a concession has already been made')
  });
  describe('sacrificeStart', function(){
    universalValidators('sacrificeStart');
    it('will return the sacrificed ship to the bank');
    it('will return an unoccupied star to the bank');
    it('will update state to have sacrifice counters')
  });
  describe('sacrifice', function(){
    universalValidators('sacrifice');
    it('will decrement sacrifice counter')
    it('must contain a valid colored action')
    it('will fail if action is not valid')
    it('will trigger a color action')
  });
  describe('catastrophy', function(){
    universalValidators('catastrophy');
    it('will only allow sacrifce in overpopulated systems')
    it('will return pieces to bank')
    it('remove all pieces if the star is destroyed')
  });
  describe('transform', function(){
    universalValidators('transform');
    standardActionValidators('transform');
    it('will return piece to bank');
    it('will take piece from bank');
    it('will not allow one size to transform to another');
  });
  describe('attack', function(){
    universalValidators('attack');
    standardActionValidators('attack');
    it('can only take equal or smaller ships');
    it('successfully changes ownership of a ship');
  });
  describe('move', function(){
    universalValidators('move');
    standardActionValidators('move');
    it('cannot move between systems sharing a common sized star')
    it('removes ship from first system')
    it('adds ship to destination system')
    it('takes a piece from the bank if the system is new')
    it('cannot move to a new system if the piece is not in the bank')
  });
  describe('build', function(){
    universalValidators('build');
    standardActionValidators('build');
    it('can only build a ship if a like ship color is controlled in system')
    it('takes a piece from the bank of the smallest size')
    it('will not allow building if the piece does not exist in the bank')
  });
})
