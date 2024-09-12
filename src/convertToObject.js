'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};

  sourceString
    .split(';')
    .map(el => el.split(':'))
    .filter(arr => arr.length === 2)
    .map(arr => arr.map(el => el.trim()))
    .forEach(el => {
      result[el[0]] = el[1];
    });

  return result;
}

module.exports = convertToObject;
