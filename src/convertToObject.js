'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styles = sourceString.split(';').map((str) => {
    return str.trim();
  }).filter((str) => str.length).map((str) => {
    return str.split(':').map((item) => item.trim());
  });

  const result = {};

  for (const pair of styles) {
    result[pair[0]] = pair[1];
  }

  return result;
}

module.exports = convertToObject;
