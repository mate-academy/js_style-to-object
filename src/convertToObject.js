'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in [stylesString.js]
 * (./stylesString.js))
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
  const arr = sourceString.split(';').map(item => item.split(':'));

  arr.forEach(element => {
    if (element.length === 2) {
      obj[element[0].trim()] = element[1].trim();
    }
  });

  return obj;
}

module.exports = convertToObject;
