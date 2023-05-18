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
  const result = {};

  const trimIt = sourceString.trim();

  const splitIt = trimIt.split(';');

  const removeSpaces = splitIt
    .map(prop => prop.split(':').map(item => item.trim()));

  const removeEmpty = removeSpaces.filter(item => item[0] !== '');

  removeEmpty.forEach((item) => {
    result[item[0]] = item[1];
  });

  return result;
}

module.exports = convertToObject;
