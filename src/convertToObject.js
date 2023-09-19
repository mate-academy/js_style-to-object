'use strict';

/**
 * Implement convertToObject function:
 *
 * and returns an object where CSS properties are keys
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  return sourceString
    .split(';')
    .reduce((styles, style) => {
      const [property, value] = style.split(':');

      if (value) {
        styles[property.trim()] = value.trim();
      }

      return styles;
    }, {});
}

module.exports = convertToObject;
