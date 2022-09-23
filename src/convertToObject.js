'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const result = sourceString.split(';')
    .map(el => el.trim().split(':').map(item => item.trim()))
    .filter(el => el.length > 1)
    .reduce((prev, [property, propertyValue]) => {
      return {
        ...prev, [property]: propertyValue,
      };
    }, {});

  return result;
}

module.exports = convertToObject;
