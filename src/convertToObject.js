'use strict';

/**
 * Implement convertToObject function:
 *

 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here

  const strToObj = {};

  sourceString
    .split(';')
    .filter(property => property.trim().length > 0)
    .map(property => property.split(':'))
    .forEach(element => {
      strToObj[element[0].trim()] = element[1].trim();
    });

  return strToObj;
}

module.exports = convertToObject;
