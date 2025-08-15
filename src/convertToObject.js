'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const result = sourceString
    .split(';')
    .map((val) => val.trim())
    .filter((val) => val.length > 0)
    .map((val) => {
      const separateIndex = val.indexOf(':');
      const key = val.slice(0, separateIndex).trim();
      const value = val.slice(separateIndex + 1).trim();

      return [key, value];
    })
    .reduce((accumulator, [key, value]) => {
      accumulator[key] = value;

      return accumulator;
    }, {});

  return result;
}

module.exports = convertToObject;
