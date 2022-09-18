'use strict';

/**
 * Implement convertToObject function:
 *
 *
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const obj = {};

  const string = sourceString.split(';')
    .filter(str => str.trim().length > 0)
    .join(':').split(':').map(str => str.trim());

  for (let i = 1; i < string.length; i += 2) {
    obj[string[i - 1]] = string[i];
  }

  return obj;
}

module.exports = convertToObject;
