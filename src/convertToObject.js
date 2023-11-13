'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * (see an example in [stylesString.js](./stylesString.js))
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
  const obj = {};
  const arrStyles = sourceString.split(';');

  for (const style of arrStyles) {
    const arrStyle = style.split(':');
    const key = arrStyle[0].trim();

    if (key.length !== 0) {
      obj[key] = arrStyle[1].trim();
    }
  }

  return obj;
}

module.exports = convertToObject;
