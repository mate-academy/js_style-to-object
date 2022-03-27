'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 *  (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const a = sourceString.split(';');
  const res = {};

  for (let i = 0; i < a.length; i++) {
    const pre = a[i].split(':');

    if (pre.length === 2) {
      res[pre[0].trim()] = pre[1].trim();
    }
  }

  return res;
}

module.exports = convertToObject;
