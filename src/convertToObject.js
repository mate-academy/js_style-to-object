'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylesArray = sourceString.split(';');
  const styleObject = {};

  for (const style of stylesArray) {
    const [property, value] = style.split(':');

    if (property && value) {
      const trimmedProperty = property.trim();
      const trimmedValue = value.trim();

      styleObject[trimmedProperty] = trimmedValue;
    }
  }

  return styleObject;
}

module.exports = convertToObject;
