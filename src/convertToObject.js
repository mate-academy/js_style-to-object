'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  if (!sourceString.trim()) {
    return {};
  }

  return sourceString
    .split(';')
    .map((keyVal) => keyVal.split(':').map((str) => str.trim()))
    .filter(([key, value]) => key && value)
    .reduce((accumulator, [key, value]) => {
      accumulator[key] = value;

      return accumulator;
    }, {});
}

module.exports = convertToObject;
