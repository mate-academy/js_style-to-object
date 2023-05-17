'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string
 *  with styles (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 *  (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const converted = sourceString.split(';');
  const normalize = converted.reduce((obj, style) => {
    const [key, value] = style.split(':');

    if (value) {
      return {
        ...obj,
        [key.trim()]: value.trim(),
      };
    }

    return { ...obj };
  }, {});

  return normalize;
}

module.exports = convertToObject;
