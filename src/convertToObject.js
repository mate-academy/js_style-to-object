'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in
 * [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const sourceArr = sourceString.split(';');
  const EXPECTED_OBJECT = {};

  sourceArr.forEach(e => {
    const index = e.indexOf(':');
    const key = e.slice(0, index).trim();
    const value = e.slice(index + 1).trim();

    if (key.length > 0) {
      EXPECTED_OBJECT[key] = value;
    };
  });

  return EXPECTED_OBJECT;
}

module.exports = convertToObject;
