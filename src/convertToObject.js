'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example
 * in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (see an exampl
 * in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const createArray = sourceString.trim().split(';');

  const result = createArray.reduce((styles, line) => {
    const [key, value] = line.trim().split(':');

    if (key && value) {
      styles[key.trim()] = value.trim();
    }

    return styles;
  }, {});

  return result;
}

module.exports = convertToObject;
