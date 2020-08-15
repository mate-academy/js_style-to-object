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
  const result = {};
  const arr = sourceString.split(';');

  arr.map(item => item.split(':'))
    .filter(pair => pair.length === 2)
    .forEach((pair) => {
      result[pair[0].trim()] = pair[1].trim();
    });

  return result;
}

module.exports = convertToObject;
