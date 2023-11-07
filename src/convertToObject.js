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
  const styled = {};
  const parts = sourceString
    .split(';');

  parts.forEach(part => {
    const colonIndex = part.indexOf(':');

    if (colonIndex !== -1) {
      const key = part
        .slice(0, colonIndex)
        .trim();
      const value = part
        .slice(colonIndex + 1)
        .trim();

      styled[key] = value;
    }
  });

  return styled;
}

module.exports = convertToObject;
