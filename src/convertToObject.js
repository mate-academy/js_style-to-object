'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  return sourceString
    .split(';')
    .map((keyVal) => keyVal.split(':').map((str) => str.trim()))
    .reduce((accumulator, [key, value]) => {
      accumulator[key] = value;

      return accumulator;
    }, {});
}

module.exports = convertToObject;
