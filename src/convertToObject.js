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
  const stylesObj = {};
  const formattedStyles = sourceString
    .split(';')
    .map(str => str.split(':').map(word => word.trim()))
    .filter(arr => arr.length === 2);

  formattedStyles.forEach(([property, value]) => {
    stylesObj[property] = value;
  });

  return stylesObj;
}

module.exports = convertToObject;
