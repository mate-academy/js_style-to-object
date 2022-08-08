'use strict';

/**
 * Implement convertToObject function:
 *
 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(sourceString) {
  const obj = {};

  const string = sourceString.split(';')
    .filter(s => s.trim().length > 0)
    .join(':').split(':').map(s => s.trim());

  for (let i = 1; i < string.length; i += 2) {
    obj[string[i - 1]] = string[i];
  }

  return obj;
}

module.exports = convertToObject;
