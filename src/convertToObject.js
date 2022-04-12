'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in
 * [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (see an exampl in
 * [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const style = {};
  const split = sourceString.split(';').map(item => item.split(':'));

  split.map(item => {
    if (item.length >= 2) {
      const key = item[0].trim();
      const value = item[1].trim();

      style[key] = value;
    }
  });

  return style;
}

module.exports = convertToObject;
