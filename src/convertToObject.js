'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const cssObject = {};

  sourceString
    .split(';')
    .map((element) => element.trim())
    .filter((element) => element.includes(':'))
    .map((element) => {
      const [key, value] = element.split(':');

      if (key && value) {
        cssObject[key.trim()] = value.trim();
      }
    });

  return cssObject;
}

module.exports = convertToObject;
