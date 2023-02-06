const { expect } = require('chai');
const { describe } = require('mocha');
const T9N = require('../../src/t9n');

describe('translate test', () => {
  const messages = {
    en: {
      hello: 'Hello',
      action: {
        greet: 'Hi',
      },
    },
  };

  it('should have translate method', () => {
    expect(new T9N().translate).not.to.be.undefined;
    expect(new T9N().translate).to.be.a('function');
  });

  it('should translate a key', () => {
    expect(new T9N({ messages }).translate('hello')).to.equal(
      messages.en.hello
    );
  });

  it('should translate nested key', () => {
    expect(new T9N({ messages }).translate('action.greet')).to.equal(
      messages.en.action.greet
    );
  });
});
