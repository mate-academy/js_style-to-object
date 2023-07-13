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
  const resultObj = {};
  const clearProperties = sourceString
    .replaceAll('\n', '')
    .split(';')
    .map(rule => rule.trim())
    .filter(rule => rule !== '')
    .map(rule => rule.split(':'));

  clearProperties
    .map(([key, value]) => {
      resultObj[key.trim()] = value.trim();
    });

  return resultObj;
}

module.exports = convertToObject;
