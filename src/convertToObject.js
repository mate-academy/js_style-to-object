'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(sourceString) {
  const cssObject = sourceString
    .split(';')
    .map((declaration) => declaration.trim())
    .filter((declaration) => declaration !== '')
    .map((declaration) => {
      const propertyValuePair = declaration.split(':');

      propertyValuePair[0] = propertyValuePair[0].trim();
      propertyValuePair[1] = propertyValuePair[1].trim();

      return propertyValuePair;
    })
    .reduce((accumulator, propertyValuePair) => {
      accumulator[propertyValuePair[0]] = propertyValuePair[1];

      return accumulator;
    }, {});

  return cssObject;
}

module.exports = convertToObject;
