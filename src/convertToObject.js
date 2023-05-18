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
  const styleObj = {};

  if (sourceString.trim().length === 0) {
    return {};
  }

  sourceString
    .split(';')
    .filter(item => {
      const delimeterIndex = item.indexOf(':');

      if (delimeterIndex !== -1) {
        styleObj[item.slice(0, delimeterIndex).trim()]
        = item.slice(delimeterIndex + 1).trim();
      }
    });

  return styleObj;
}

module.exports = convertToObject;
