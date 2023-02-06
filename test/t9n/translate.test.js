const { expect } = require('chai');
const { describe } = require('mocha');
const T9N = require('../../src/t9n');
const messages = require('./resources/messages.json')

describe('translate test', () => {
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

  it('should translate interpolated key', () => {
    const t9n = new T9N({ messages });

    expect(
      t9n.translate('action.ask', { question: 'go to the toilet' })
    ).to.equal('I want to go to the toilet');
    expect(
      t9n.translate('action.prompt', { name: 'jhon', input: 'age' })
    ).to.equal('Hi jhon, please enter your age');
  });
});
