'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here

  const styleObject = {};
  const styleDeclarations = sourceString.split(';');

  const parsedDeclarations = styleDeclarations
    .map((str) => str.split(':'))
    .filter((el) => {
      return el[0].trim() !== '';
    });

  parsedDeclarations.forEach(([key, value]) => {
    if (key.trim() && value.trim()) {
      styleObject[key.trim()] = value.trim();
    }
  });

  return styleObject;
}

module.exports = convertToObject;
