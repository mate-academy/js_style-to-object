'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see
 * an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS
 * properties (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const sourceStringCopy = sourceString.replace(/\n/g, '').split(';')
    .map(el => el.trim().split(':').map(el2 => el2.trim()))
    .filter(([key, value]) => key !== '' && value !== undefined);

  return Object.fromEntries(sourceStringCopy);
}

module.exports = convertToObject;
