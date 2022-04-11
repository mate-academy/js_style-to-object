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
  const obj = {};

  sourceString
    .split(';')
    .map(item => item.split(':'))
    .forEach(mod => {
      if (mod.length >= 2) {
        const key = mod[0].trim();
        const value = mod[1].trim();

        obj[key] = value;
      }
    });

  return obj;
}

module.exports = convertToObject;
