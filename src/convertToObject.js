'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example
 * in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS
 * properties (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const obj = {};

  sourceString.split(';')
    .map(element => element.trim())
    .filter(element => element.length > 0)
    .map(element => {
      const key = element.split(':')[0].trim();
      const value = element.split(':')[1].trim();

      obj[key] = value;
    });

  return obj;
}

module.exports = convertToObject;
