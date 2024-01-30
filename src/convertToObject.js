'use strict';

/**
 * Implement convertToObject function:
 *
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylesArray = sourceString.split(';');

  const stylesObject = {};

  stylesArray.forEach(style => {
    const [property, value] = style.split(':');

    if (value !== undefined) {
      const propertyName = property.trim();
      const propertyValue = value.trim();

      stylesObject[propertyName] = propertyValue;
    }
  });

  return stylesObject;
}

module.exports = convertToObject;
