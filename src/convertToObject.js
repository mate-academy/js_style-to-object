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
    .map((declaration) => declaration.trim())
    .filter((declaration) => declaration.includes(':'))
    .forEach((declaration) => {
      const [property, value] = declaration
        .split(/:(.+)/)
        .map((part) => part.trim());

      if (property && value !== undefined) {
        stylesObject[property] = value;
      }
    });

  return stylesObject;
}

module.exports = convertToObject;
