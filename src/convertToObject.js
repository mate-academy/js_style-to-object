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
    .map((a) => a.trim())
    .filter((a) => a.includes(':'))
    .reduce((acc, a) => {
      const [key, value] = a.split(':');

      if (key && value) {
        acc[key.trim()] = value.trim();
      }

      return acc;
    }, {});

  return result;
}

module.exports = convertToObject;
