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
  const objectifiedString = {};
  const params = sourceString
    .split('\n')
    .filter(param => param.length >= 4)
    .map(param => param.split(':'));

  for (const param of params) {
    objectifiedString[param[0].trim()]
      = param[1].slice(0, param[1].indexOf(';')).trim();
  }

  return objectifiedString;
}

module.exports = convertToObject;
