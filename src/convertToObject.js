'use strict';

/**
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  return sourceString
    .replace(/\n/g, '')
    .split(';')
    .map((lineOfCode) => lineOfCode.split(':').map((value) => value.trim()))
    .filter((elem) => elem[0])
    .reduce((acc, [key, value]) => {
      acc[key] = value;

      return acc;
    }, {});
}

module.exports = convertToObject;
