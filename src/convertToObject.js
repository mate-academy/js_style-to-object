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
  const cache = sourceString.replace(/:/g, '').split(';');
  const obj = {};

  for (let i = 0; i < cache.length; i++) {
    const item = cache[i].trim().split(' ');

    if (item[0] !== undefined && item[0].length > 0) {
      obj[item[0]] = item.splice(1, item.length - 1).join(' ').trim();
    }
  }

  return obj;
}

module.exports = convertToObject;
