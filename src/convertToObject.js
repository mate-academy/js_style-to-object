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
    .split('\n')
    .filter(item => item.length > 3)
    .reduce((acc, current) => {
      const [key, value] = current.replace(';', '').split(':');

      acc[key.trim()] = value.trim();

      return acc;
    }, {});
}

module.exports = convertToObject;
