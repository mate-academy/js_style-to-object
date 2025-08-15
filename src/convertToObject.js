'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const propertyValues = {};

  sourceString
    .split(';')
    .map((declaration) => declaration.trim())
    .filter((declaration) => declaration)
    .forEach((declaration) => {
      const colonIndex = declaration.indexOf(':');

      if (colonIndex !== -1) {
        const property = declaration.substring(0, colonIndex).trim();
        const value = declaration.substring(colonIndex + 1).trim();

        propertyValues[property] = value;
      }
    });

  return propertyValues;
}

module.exports = convertToObject;
