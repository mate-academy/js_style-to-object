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
  const result = {};

  const filteredArr = sourceString
    .replace(/[\s]+/g, ' ')
    .split(';')
    .filter(item => item !== ' ');

  filteredArr.forEach(item => {
    const temp = item.split(':');
    result[temp[0].trim()] = temp[1].trim();
  });

  return result;
}

module.exports = convertToObject;
