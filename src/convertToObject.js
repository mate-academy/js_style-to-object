'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes string with styles
 * and returns object where CSS properties are keys
 * and values are the values of related CSS properties

 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const convertedStyles = {};

  sourceString.split(';').forEach(el => {
    const [property, value] = el.split(':');

    if (property.length > 1 && value !== undefined) {
      const formattedProperty = property.trim();

      convertedStyles[formattedProperty] = value.trim();
    }
  });

  return convertedStyles;
}

module.exports = convertToObject;
