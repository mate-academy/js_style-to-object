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
  // write your code here

  const objectFromArr = sourceString.split(';')
  .reduce((acc, currentVal) => {
    const [key, value] = currentVal.split(':').map(item => item.trim());
    if (key && value) {
      acc[key] = value;
    }
    return acc
  }, {});

  return objectFromArr;
}

module.exports = convertToObject;
