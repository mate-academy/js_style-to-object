'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes
 *  a string with styles
 *  (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 *  (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};
  const lines = sourceString.split('\n');

  lines.forEach(line => {
    const parts = line.split(':');

    const property = parts[0];
    const values = parts[1] ? parts[1].replace(/;$/, '') : '';

    if (property && values) {
      result[property] = values;
    }
  });

  return result;
}

module.exports = convertToObject;
