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
  const result = {};
  const rows = sourceString.split(/\r?\n/);

  rows.forEach((row) => {
    if (row === '' || !row.includes(':')) {
      return;
    }

    const property = row.split(/:|;/)
      .map(element => element.trim());

    result[property[0]] = property[1];
  });

  return result;
}

module.exports = convertToObject;
