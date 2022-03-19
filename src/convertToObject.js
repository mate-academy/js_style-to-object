'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an example in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString.split(';').reduce((base, line) => {
    const cssRule = line.split(':').map(string => string.trim());

    if (cssRule[0].length && cssRule[1].length) {
      base[cssRule[0]] = cssRule[1];
    }

    return base;
  }, {});
}

module.exports = convertToObject;
