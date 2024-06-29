'use strict';

const toCamelCase = require('./toCamelCase');

/**
 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(sourceString) {
  const splitString = sourceString.split(';');
  const newObject = {};

  splitString.forEach((rule) => {
    if (rule.trim()) {
      const [key, value] = rule.split(':');

      const formattedKey = key.includes('-')
        ? key.trim()
        : toCamelCase(key.trim());

      newObject[formattedKey] = value.trim();
    }
  });

  return newObject;
}

module.exports = convertToObject;
