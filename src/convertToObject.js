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
  const object = {};
  const arrOfSource = sourceString.split(';')
    .map(item => item.trim())
    .filter(item => item !== '')
    .map(item => item.split(':'))
    .map(item => item.map(prop => prop.trim()));

  for (const item of arrOfSource) {
    object[item[0]] = item[1];
  }

  return object;
}

module.exports = convertToObject;
