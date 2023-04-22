'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example
 * in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const obj = {};

  sourceString.split(';').forEach(element => {
    const str = element.split(':');

    if (str[0] !== undefined && str[1] !== undefined) {
      obj[str[0].trim()] = str[1].trim();
    }
  });

  return obj;
}

module.exports = convertToObject;
