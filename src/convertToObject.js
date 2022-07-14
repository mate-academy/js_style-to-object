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
  const normalize = sourceString.split(';');

  normalize.forEach(item => {
    if (item.trim().length) {
      const splitedValue = item.split(':');
      const key = splitedValue[0].trim();
      const value = splitedValue[1].trim();

      style[key] = value;
    }
  });

  return style;
}

module.exports = convertToObject;
