'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 *  (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS
 * properties (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};

  sourceString
    .split(';')
    .map(el => el.trim())
    .filter(el => el !== '')
    .forEach(el => {
      const str = el.split(':');

      result[str[0].trim()] = str[1].trim();
    });

  return result;
}

module.exports = convertToObject;
