'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styleLines = sourceString.split(';');

  const styleObject = {};

  styleLines.forEach((styleLine) => {
    const [property, value] = styleLine.split(':');

    if (property && value) {
      const propertyName = property.trim();
      const propertyValue = value.trim();

      if (propertyName && propertyValue) {
        styleObject[propertyName] = propertyValue;
      }
    }
  });

  return styleObject;
}

module.exports = convertToObject;
