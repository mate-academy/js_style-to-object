'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of
 * related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const array = sourceString.split(';')
    .filter((row) => row.indexOf(':') >= 0);

  const result = {};

  for (const item of array) {
    const row = item.split(':');

    result[row[0].trim()] = row[1].trim().replace(/\s+/g, ' ');
  }

  return result;
}

module.exports = convertToObject;
