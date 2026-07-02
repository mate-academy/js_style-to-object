'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const convertedStyles = {};

  sourceString.split(';').forEach((el) => {
    const [property, value] = el.split(':');

    if (property.length > 1 && value !== undefined) {
      const formattedProperty = property.trim();

      convertedStyles[formattedProperty] = value.trim();
    }
  });

  return convertedStyles;
}

module.exports = convertToObject;
