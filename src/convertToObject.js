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
  // write your code here
  const stringToObject = sourceString.split(';').map(style =>
    style.trim().split(':')).filter(word => word[0] !== '')
    .reduce((obj, [key, value]) => {
      obj[key.trim()] = value.trim();

      return obj;
    }, {});

  return stringToObject;
}

module.exports = convertToObject;
