const { expect } = require('chai');
const { describe, it } = require('mocha');
const T9N = require('../../src/t9n');

describe('locale test', () => {
  it('should get current locale with getLocale', () => {
    expect(new T9N().getLocale).not.to.be.undefined;
    expect(new T9N().getLocale).to.be.a('function');

    expect(new T9N().getLocale()).to.equal('en');
  });
});
