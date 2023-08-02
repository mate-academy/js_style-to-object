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
  const sourceObj = {};

  sourceString
    .split(';')
    .map(item => item.trim())
    .filter(item => item !== '')
    .map(item => item.split(': '))
    .forEach(([key, value]) => {
      sourceObj[key.trim()] = value.trim();
    });

  return sourceObj;
}

module.exports = convertToObject;
