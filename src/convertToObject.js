'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylesObject = {};
  const stylesArray = sourceString.split(';');

  stylesArray.forEach((style) => {
    const [property, ...valueParts] = style.split(':');
    const trimmedProperty = property.trim();
    const trimmedValue = valueParts.join(':').trim();

    if (trimmedProperty && trimmedValue) {
      stylesObject[trimmedProperty] = trimmedValue;
    }
  });

  return stylesObject;
}

module.exports = convertToObject;
