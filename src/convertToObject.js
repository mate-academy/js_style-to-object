'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString.split(';').reduce((styles, prop) => {
    if (prop.trim().length) {
      const keysEndIndex = prop.indexOf(':');
      const key = prop.slice(0, keysEndIndex).trim();
      const value = prop.slice(keysEndIndex + 1).trim();

      return {
        ...styles,
        [key]: value,
      };
    }

    return styles;
  }, {});
}

module.exports = convertToObject;
