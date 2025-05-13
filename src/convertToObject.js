'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(styleString) {
  const styleObject = {};

  styleString.split(';').forEach((pair) => {
    const [property, value] = pair.split(':');

    if (property && value) {
      const key = property.trim();
      const trimmedValue = value.trim();

      if (key && trimmedValue) {
        styleObject[key] = trimmedValue;
      }
    }
  });

  return styleObject;
}

module.exports = convertToObject;
