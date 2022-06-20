'use strict';

/**
 * Implement convertToObject function:
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const splittedString = sourceString.split(';');
  const stylesArray = splittedString
    .map(item => item.split(':'))
    .filter(property => property.length > 1)
    .map(item => item.map(value => value.trim()));

  const stylesObject = Object.fromEntries(stylesArray);

  return stylesObject;
}

module.exports = convertToObject;
