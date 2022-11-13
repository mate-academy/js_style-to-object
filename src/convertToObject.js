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
  const styles = sourceString.split(';');

  const result = {};

  for (const style of styles) {
    const index = style.indexOf(':');
    const property = style.slice(0, index).trim();
    const value = style.slice(index + 1).trim();

    if (property) {
      result[property] = value;
    }
  }

  return result;
}

module.exports = convertToObject;
