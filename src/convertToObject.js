'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const obj = {};

  sourceString.trim()
    .split(';')
    .map(item => item.split(':'))
    .filter(val => val.length > 1)
    .forEach(([key, value]) => {
      obj[key.trim()] = value.trim();
    });

  return obj;
}

module.exports = convertToObject;
