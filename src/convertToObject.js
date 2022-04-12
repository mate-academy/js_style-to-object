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
  // write your code here
  const object = {};
  const arraySplit = sourceString.split(';');
  const array = arraySplit.map(style => style.split(':'));

  array.forEach(style => {
    if (style.length > 1) {
      object[style[0].trim()] = style[1].trim();
    }
  });

  return object;
}

module.exports = convertToObject;
