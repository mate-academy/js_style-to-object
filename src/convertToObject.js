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
  const lines = sourceString.replaceAll(';', '').split('\n');

  return lines
    .filter(n => n.trim() !== '')
    .reduce((a, v) => ({
      ...a,
      [v.split(':')[0].trim()]: v.split(':')[1].trim(),
    }), {});
}

module.exports = convertToObject;
