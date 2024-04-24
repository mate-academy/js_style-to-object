'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const newObject = {};
  const arr = sourceString.split(';');

  for (const string of arr) {
    const split = string.split(':');

    if (split.length === 2) {
      const key = split[0].trim();
      const value = split[1].trim();

      newObject[key] = value;
    }
  }

  return newObject;
}

module.exports = convertToObject;
