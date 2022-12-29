'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example
 *  in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const splitString = sourceString.split(';');
  const result = {};

  for (const prop of splitString) {
    const style = prop.split(':');

    if (style[0] && style[1]) {
      result[style[0].trim()] = style[1].trim();
    }
  }

  return result;
}

module.exports = convertToObject;
