'use strict';

/**
 * Function takes a string with styles
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .filter(value => value.includes(':'))
    .map(value => value.split(':'))
    .reduce((key, value) => {
      key[value[0].trim()] = value[1].trim();

      return key;
    }, {});
}

module.exports = convertToObject;
