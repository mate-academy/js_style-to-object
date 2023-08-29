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
  const sourceArr = sourceString.split(';');
  const newObj = {};

  for (const ch of sourceArr) {
    const [key, value] = ch.split(':');

    if (value !== undefined) {
      newObj[key.trim()] = value.trim();
    }
  }

  return newObj;
}

module.exports = convertToObject;
