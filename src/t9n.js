const { isObject } = require('../lib/helpers/check-types.helper');

function T9N(config) {
  this.messages = {};

  if (isObject(config)) {
    this.messages = config.messages;
  }
}

T9N.prototype.setMessages = function (messages) {
  this.messages = messages;
};

T9N.prototype.setLocaleMessages = function (locale, messages) {
  this.messages[locale] = messages;
};

T9N.prototype.getMessages = function () {
  return this.messages;
};

T9N.prototype.getLocaleMessages = function (locale) {
  return this.messages[locale];
};

module.exports = T9N;
