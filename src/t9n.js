const { isObject } = require('../lib/helpers/check-types.helper');

function T9N(config) {
  this.messages = {};

  if (isObject(config)) {
    if (!isObject(config.messages))
      throw new Error('config messages must be an object');

    this.messages = config.messages;
  }
}

T9N.prototype.setMessages = function (messages) {
  if (!isObject(messages)) throw new Error('messages must be an object');

  this.messages = messages;
};

T9N.prototype.setLocaleMessages = function (locale, messages) {
  if (!isObject(messages)) throw new Error('messages must be an object');

  this.messages[locale] = messages;
};

T9N.prototype.getMessages = function () {
  return this.messages;
};

T9N.prototype.getLocaleMessages = function (locale) {
  if (!this.messages.hasOwnProperty(locale))
    throw new Error('locale not found');

  return this.messages[locale];
};

module.exports = T9N;
