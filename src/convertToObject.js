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
  const sourceArr = sourceString.split(';');
  const obj = {};

  const arr = sourceArr.map(elem => elem.split(':').map(item => item.trim()));

  arr.forEach(([key, value]) => {
    if (key.length >= 1 && value.length >= 1) {
      obj[key] = value;
    }
  });

  return obj;
}

module.exports = convertToObject;
