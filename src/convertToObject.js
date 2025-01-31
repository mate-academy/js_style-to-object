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
    .map((newStrg) => newStrg.trim())
    .filter((newStrg) => newStrg)
    .reduce((acc, newStrg) => {
      const [key, value] = newStrg.split(':').map((str) => str.trim());

      acc[key] = value;

      return acc;
    }, {});
}

module.exports = convertToObject;
