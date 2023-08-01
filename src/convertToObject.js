'use strict';

/**
 * @param {string} sourceString
 * @return {object}
 */
function convertToObject(sourceString) {
  const styleObject = sourceString.split(';').reduce((acc, styleLine) => {
    const [property, value] = styleLine.split(':');

    if (property && value) {
      const propertyName = property.trim();
      const propertyValue = value.trim();

      if (propertyName && propertyValue) {
        acc[propertyName] = propertyValue;
      }
    }

    return acc;
  }, {});

  return styleObject;
}

module.exports = convertToObject;
