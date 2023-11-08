'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example
 * in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS
 * properties (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString.split(';').reduce((result, style) => {
    const stylePair = style.split(':');
    const key = stylePair[0] ? stylePair[0].trim() : undefined;
    const value = stylePair[1] ? stylePair[1].trim() : undefined;

    if (key && value) {
      result[key] = value;
    }

    return result;
  }, {});
}

module.exports = convertToObject;
