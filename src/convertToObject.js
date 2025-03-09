'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const res = {};

  sourceString
    .split(';')
    .map((line) => line.trim())
    .filter((line) => line.includes(':'))
    .forEach((line) => {
      const [key, val] = line.split(':').map((part) => part.trim());

      res[key] = val;
    });

  return res;
}

module.exports = convertToObject;
