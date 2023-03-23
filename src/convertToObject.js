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
  const classObj = {};

  sourceString
    .split('\n')
    .map(item => item.replace(';', ''))
    .filter(item => item !== '')
    .map(item => item.split(':').map(i => i.trim()))
    .filter(item => item.length > 1)
    .map(item => (classObj[item[0]] = item[1]));

  return classObj;
}

module.exports = convertToObject;
