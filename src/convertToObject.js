'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in
 * [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (see an exampl
 * in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const cssPropertiesAndValues = sourceString
    .split(';')
    .filter(item => item.length > 4)
    .reduce((prev, item) => {
      const index = item.indexOf(':');

      return {
        ...prev,
        [item.slice(0, index).trim()]: item.slice(index + 1).trim(),
      };
    }, {});

  return cssPropertiesAndValues;
}

module.exports = convertToObject;
