/* eslint-disable max-len */
'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const normalitermedCss = {};
  const normalitermed = sourceString
    .split(':')
    .map(word => word.trim())
    .join(': ');

  normalitermed
    .split(';')
    .map(word => word.trim())
    .filter(word => word !== '')
    .forEach(term => {
      const [key, value] = term.split(': ');

      normalitermedCss[key] = value;
    });

  return normalitermedCss;
}

module.exports = convertToObject;
