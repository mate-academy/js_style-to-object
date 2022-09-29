'use strict';

/**
 * Implement convertToObject function:
 *
  * Function takes a string with s
  * tyles (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related
 * CSS properties (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const objectWithStyles = sourceString
    .split(';')
    .map(style => style.trim()
      .split(':')
      .map(item => item.trim()))
    .filter(style => style.length > 1)
    .reduce((prev, [property, value]) => (
      {
        ...prev,
        [property]: value,
      }
    ), 0);

  return objectWithStyles;
}

module.exports = convertToObject;
