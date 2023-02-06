const { isObject, isString } = require('../lib/helpers/check-types.helper');

function T9N(config) {
  this.messages = {};
  this.locale = 'en';

  if (isObject(config)) {
    if (config.hasOwnProperty('messages')) {
      this.setMessages(config.messages);
    }

    if (config.hasOwnProperty('locale')) {
      if (!isString(config.locale))
        throw new Error('config locale must be a string');

      this.locale = config.locale;
    }
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

T9N.prototype.getLocale = function () {
  return this.locale;
};

module.exports = T9N;
