'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .map((declaration) => declaration.trim())
    .filter(Boolean)
    .map((declaration) => declaration.split(':'))
    .map((pair) => pair.map((declaration) => declaration.trim()))
    .reduce((acc, pair) => {
      acc[pair[0]] = pair[1];

      return acc;
    }, {});
}

module.exports = convertToObject;
