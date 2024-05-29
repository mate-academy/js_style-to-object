'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const cssProperties = sourceString.split(';');
  const cssCode = {};

  cssProperties.forEach((property) => {
    const propertyArr = property.split(':');

    if (propertyArr[0].trim().length > 0) {
      cssCode[propertyArr[0].trim()] = propertyArr[1].trim();
    }
  });

  return cssCode;
}

module.exports = convertToObject;
