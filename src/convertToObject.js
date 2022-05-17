'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of
 * related CSS properties (see an exampl in
 * [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const obj = sourceString.split(';').map(
    key => key.split(':').map(
      value => value.trim())).reduce((a, b) => {
    a[b[0]] = b[1];
    delete a[b];

    return a;
  }, {});

  return obj;
}

module.exports = convertToObject;
