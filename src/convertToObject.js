'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes string with styles
 * and returns object where CSS properties are keys
 * and values are the values of related CSS properties

 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const entries = new Map(sourceString.split(';')
    .map(x => x.split(':'))
    .map(x => x.map(y => y.trim()))
    .filter(x => x.length > 1));

  return Object.fromEntries(entries);
}

module.exports = convertToObject;
