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
  // write your code here
  const sourceToArray = sourceString
    .split(';')
    .map(elem => elem.split(':'))
    .filter(item => item.length > 1);

  return sourceToArray.reduce((obj, elem) => {
    return {
      ...obj,
      [elem[0].trim()]: elem[1].trim(),
    };
  }, {});
}

module.exports = convertToObject;
