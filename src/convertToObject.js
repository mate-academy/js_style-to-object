'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes string with styles
 * and returns object where CSS properties are keys
 * and values are the values of related CSS properties

 * @param {string} sourceString
//  *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};

  const finalArray = sourceString.split(';')
    .map(element => element.split(':'))
    .filter(group => group.length > 1);

  for (const prop of finalArray) {
    result[prop[0].trim()] = prop[1].trim();
  }

  return result;
}

module.exports = convertToObject;
