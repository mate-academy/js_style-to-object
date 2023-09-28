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
  return sourceString
    .replace(/\s+/g, ' ')
    .replace(/\s:/g, ':')
    .split(';')
    .reduce((result, prop) => {
      const [key, value] = prop.trim().split(': ');

      if (key && value) {
        result[key] = value;
      }

      return result;
    }, {});
}

module.exports = convertToObject;
