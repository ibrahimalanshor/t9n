const { expect } = require('chai');
const { describe, it } = require('mocha');
const T9N = require('../../src/t9n');

describe('locale test', () => {
  it('should get current locale with getLocale', () => {
    expect(new T9N().getLocale).not.to.be.undefined;
    expect(new T9N().getLocale).to.be.a('function');

    expect(new T9N().getLocale()).to.equal('en');
  });

  it('should set default locale from constructor arguments', () => {
    const t9n = new T9N({ locale: 'id' });

    expect(t9n.getLocale()).to.equal('id');
  });

  it('should thrown on set invlaid default locale from constructor arguments', () => {
    expect(() => new T9N({ locale: false })).to.throw();
  });
});
