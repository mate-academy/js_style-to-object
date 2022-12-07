'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS styles are keys
 * and values are the values of related CSS styles
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
const makeTheStylePairs = (prev, style) => {
  const [key, value] = style.split(':');

  return value !== undefined
    ? {
      ...prev,
      [key.trim()]: value.trim(),
    }
    : prev;
};

function convertToObject(sourceString) {
  const strings = sourceString.split(';');

  return strings.reduce(makeTheStylePairs, {});
}

module.exports = convertToObject;
