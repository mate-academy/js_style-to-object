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
  const res = {};

  sourceString.split(';').forEach((el) => {
    const spl = el.split(':');

    if (spl.length > 1) {
      res[spl[0].trim()] = spl[1].trim();
    }
  });

  return res;
}

module.exports = convertToObject;
