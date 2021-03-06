
const mocks = require('../mocks/').sacrificeStart;
const {sacrificeStart} = require('../../src/actions');
const _ = require('lodash');
const { expect, assert } = require('chai');
const deepfreeze = require('deepfreeze');

module.exports = function sacrificeStartSpect() {
  it('will return the sacrificed ship to the bank', function () {
    const mock = deepfreeze(mocks.valid);
    const result = sacrificeStart(mock.state, mock.action);
    expect(result.state).to.deep.equal(mock.result);
  });
  it('will return an unoccupied star to the bank', function () {
    const mock = deepfreeze(mocks.starReturned);
    const result = sacrificeStart(mock.state, mock.action);
    expect(result.state).to.deep.equal(mock.result);
  });
  it('will update state to have sacrifice counters', function () {
    const mock = deepfreeze(mocks.valid);
    const result = sacrificeStart(mock.state, mock.action);
    expect(result.state).to.deep.equal(mock.result);
  });
};