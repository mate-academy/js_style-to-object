'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const parsedArr = sourceString
    .split(';')
    .map(n => n.trim())
    .filter(n => n !== '')
    .map(n => n.split(':'))
    .map(n => n.map(m => m.trim()));

  return parsedArr.reduce((a, b) => {
    return {
      ...a,
      [b[0]]: b[1],
    };
  }, {});
}

module.exports = convertToObject;
