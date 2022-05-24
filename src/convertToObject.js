'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in
 * [stylesString.js](./stylesString.js))
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
  const clearItem = sourceString.split(';');
  const result = clearItem.reduce((prev, styles) => {
    let firstElement = styles.split('').findIndex((item) => item === ':');

    const endElement = styles.slice(firstElement + 1).trim();

    firstElement = styles.slice(0, firstElement).trim();

    return {
      ...prev, [firstElement]: endElement,
    };
  }, {});

  delete result[''];

  return result;
}
module.exports = convertToObject;
