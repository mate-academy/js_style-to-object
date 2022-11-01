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
  const cssItems = sourceString.split(';');

  const styles = {};

  cssItems.map(item => {
    const entries = item.split(':');
    const key = entries[0];
    const value = entries[1];

    if (value !== undefined) {
      const trimmedProperty = value.trim();
      const trimmedClass = key.trim();

      styles[trimmedClass] = trimmedProperty;
    }
  });

  return styles;
}

module.exports = convertToObject;
