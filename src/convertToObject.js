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
  let sourceArray = sourceString.split(';');
  const result = {};

  sourceArray = sourceArray
    .map(pair => pair.trim())
    .filter(pair => pair !== '')
    .map(pair => pair.split(':'))
    .map(pair => pair.map(element => element.trim()));

  for (let i = 0; i < sourceArray.length; i++) {
    result[sourceArray[i][0]] = sourceArray[i][1];
  }

  return result;
}

module.exports = convertToObject;
