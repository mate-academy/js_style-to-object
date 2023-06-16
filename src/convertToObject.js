'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in [stylesString.js]
 * (./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an example in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};
  const attributes = sourceString.split(';');

  for (let i = 0; i < attributes.length; i++) {
    const style = attributes[i].split(':');

    if (style[1] !== undefined) {
      result[style[0].trim()] = style[1].trim();
    }
  }

  return result;
}

module.exports = convertToObject;
