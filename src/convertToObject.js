/* eslint-disable no-unreachable */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related
 * CSS properties (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const result = sourceString.split(';');

  return result.reduce((sum, property) => {
    const [key, value] = property.split(':').map(text => text.trim());

    if (key) {
      sum[key] = value;
    }

    return sum;
  }, {});
};

module.exports = convertToObject;
