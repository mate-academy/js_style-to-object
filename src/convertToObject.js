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
  const stylesArray = sourceString
    .split(';').filter(style =>
      style.trim() !== '');

  const stylesObject = stylesArray.reduce(function(result, style) {
    const parts = style.split(':').map(part => part.trim());
    const property = parts[0];
    const value = parts[1];

    result[property] = value;

    return result;
  }, {});

  return stylesObject;
}

module.exports = convertToObject;
