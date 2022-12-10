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
  const cssString = sourceString.split(';');

  const stringToCss = (prev, elem) => {
    const [key, value] = elem.split(':');

    if (value !== undefined) {
      return {
        ...prev,
        [key.trim()]: value.trim(),
      };
    } else {
      return prev;
    }
  };

  return cssString.reduce(stringToCss, {});
}

module.exports = convertToObject;
