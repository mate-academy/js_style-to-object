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
  const sourceArray = sourceString.split(';');
  const result = sourceArray.reduce((prev, styles) => {
    if (!styles.includes(':')) {
      return prev;
    }

    const [key, value] = styles.split(':');

    return {
      ...prev, [key.trim()]: value.trim(),
    };
  }, {});

  return result;
}

module.exports = convertToObject;
