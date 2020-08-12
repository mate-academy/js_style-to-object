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
  const sourceObj = {};
  const arr = sourceString
    .split(';')
    .map(x => x.split(':'))
    .map(x => x.map(a => a.trim()))
    .filter(x => x[0] !== '');

  for (const [property, value] of arr) {
    sourceObj[property] = value;
  }

  return sourceObj;
}

module.exports = convertToObject;
