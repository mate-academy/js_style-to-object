'use strict';

/**
 * Implement a convertToObject function that takes
 *  a string with styles and returns an object where CSS
 * declarations are converted to keys and values.
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .map((styles) => styles.trim())
    .filter((styles) => styles.length > 0)
    .map((styles) => styles.split(':'))
    .filter((parts) => parts.length === 2)
    .reduce((styleObject, [property, value]) => {
      styleObject[property.trim()] = value.trim();

      return styleObject;
    }, {});
}

module.exports = convertToObject;
