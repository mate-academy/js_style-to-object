'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example
 * in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of
 * related CSS properties (see an example
 * in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const object = sourceString.split(';').reduce((obj, el) => {
    const arr = el.split(':');

    if (arr.length === 2) {
      obj[arr[0].trim()] = arr[1].trim();
    }

    return obj;
  }, {});

  return object;
}

module.exports = convertToObject;
