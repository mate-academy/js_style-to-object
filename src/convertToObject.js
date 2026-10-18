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
    .filter((declaration) => declaration !== '')
    .map((declaration) => declaration.split(':'))
    .map((pair) => pair.map((part) => part.trim()))
    .reduce((accumulator, [key, value]) => {
      accumulator[key] = value;

      return accumulator;
    }, {});
}

module.exports = convertToObject;
