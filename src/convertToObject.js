'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const cssDeclarations = sourceString.split(';');
  const styleObject = {};

  cssDeclarations.forEach((property) => {
    const propertyArr = property.split(':', 2);
    const [propertyName, propertyValue] = propertyArr;

    if (propertyValue) {
      styleObject[propertyName.trim()] = propertyValue.trim();
    }
  });

  return styleObject;
}

module.exports = convertToObject;
