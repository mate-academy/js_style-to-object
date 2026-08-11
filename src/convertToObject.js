'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const declarations = sourceString
    .split(';')
    .map((part) => part.trim())
    .filter((part) => part.length > 0);

  return declarations
    .map((declaration) => declaration.split(':').map((part) => part.trim()))
    .reduce((acc, [property, value]) => {
      acc[property] = value;

      return acc;
    }, {});
}

module.exports = convertToObject;
