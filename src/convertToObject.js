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
  const arr = sourceString.trim().split(';');

  return arr
    .reduce((prev, item) => {
      const [key, value] = item.trim().split(':')
        .map(part => part.trim());

      if (key && value) {
        prev[key] = value;
      }

      return prev;
    }, {});
}

module.exports = convertToObject;
