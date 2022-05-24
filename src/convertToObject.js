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
  const newEl = sourceString.split(';');

  const obj = {};

  for (const n in newEl) {
    const arr = newEl[n].split(':');

    if (arr.length === 2) {
      const cut = arr.map(y => y.trim());

      obj[cut[0]] = cut[1];
    }
  }

  return obj;
}

module.exports = convertToObject;
