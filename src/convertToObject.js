'use strict';

/**
 * @param {string} sourceString
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylesArray = sourceString.split(';');
  const stylesObject = {};

  stylesArray.forEach((declaration) => {
    if (!declaration.trim()) {
      return;
    }

    const [property, value] = declaration.split(':');

    if (property && value) {
      const cleanedProperty = property.trim();
      const cleanedValue = value.trim();

      stylesObject[cleanedProperty] = cleanedValue;
    }
  });

  return stylesObject;
}

module.exports = convertToObject;
