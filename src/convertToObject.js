'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylesObject = {};

  sourceString
    .split(';')
    .map((line) => line.split(':'))
    .map((parts) => parts.map((part) => part.trim()))
    .filter((parts) => parts.length === 2)
    .forEach((parts) => {
      stylesObject[parts[0]] = parts[1];
    });

  return stylesObject;
}

module.exports = convertToObject;
