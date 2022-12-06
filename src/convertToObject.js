'use strict';

/**
 *
 * 
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styleString = sourceString
    .split(';')
    .filter(value => value.includes(':'))
    .map(value => value.split(':'))
    .reduce((key, value) => {
      key[value[0].trim()] = value[1].trim();

      return key;
    }, {});

  return styleString;
}

module.exports = convertToObject;
