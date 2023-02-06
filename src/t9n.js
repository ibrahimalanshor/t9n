const { isObject, isString } = require('../lib/helpers/check-types.helper');
const { transformMessages } = require('./helpers/messages.helper');

function T9N(config) {
  this.messages = {};
  this.locale = 'en';

  if (isObject(config)) {
    if (config.hasOwnProperty('messages')) {
      this.setMessages(config.messages);
    }

    if (config.hasOwnProperty('locale')) {
      this.setLocale(config.locale);
    }
  }
}

T9N.prototype.setMessages = function (messages) {
  if (!isObject(messages)) throw new Error('messages must be an object');

  this.messages = transformMessages(messages, {
    root: true,
  });
};

T9N.prototype.setLocaleMessages = function (locale, messages) {
  if (!isObject(messages)) throw new Error('messages must be an object');

  this.messages[locale] = transformMessages(messages);
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

T9N.prototype.setLocale = function (locale) {
  if (!isString(locale)) throw new Error('locale must be a string');

  this.locale = locale;
};

T9N.prototype.translate = function (key, attrs) {
  const text = this.messages[this.locale][key];

  if (attrs) {
    return Object.keys(attrs).reduce(
      (res, current) => res.replace(`{${current}}`, attrs[current]),
      text
    );
  }
  return text;
};

module.exports = T9N;
