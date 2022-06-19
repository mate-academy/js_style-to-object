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
  const stylesString = sourceString
    .split(';').map((string) => string.trim()).filter(Boolean);

  const objectStyles = stylesString.reduce((obj, cssProperty) => {
    const [Key, Value] = cssProperty.split(':');

    return {
      ...obj,
      [Key.trim()]: Value.trim(),
    };
  }, {});

  return objectStyles;
}

module.exports = convertToObject;
