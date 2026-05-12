'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString.split(';').reduce((acc, declaration) => {
    const [property, value] = declaration.split(':');

    if (!property || !value) {
      return acc;
    }

    const trimmedProperty = property.trim();
    const trimmedValue = value.trim();

    if (!trimmedProperty || !trimmedValue) {
      return acc;
    }

    acc[trimmedProperty] = trimmedValue;

    return acc;
  }, {});
}

module.exports = convertToObject;
