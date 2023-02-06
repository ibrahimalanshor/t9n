const { expect } = require('chai');
const { describe } = require('mocha');
const T9N = require('../../src/t9n');

describe('translate test', () => {
  it('should have translate method', () => {
    expect(new T9N().translate).not.to.be.undefined;
    expect(new T9N().translate).to.be.a('function');
  });
});
