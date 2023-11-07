'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example
 * in [stylesString.js](./stylesString.js))
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
  const result = {};
  const arrOfStyles = sourceString.split(';');

  arrOfStyles.forEach(pair => {
    const property = pair.split(':');

    if (property.length === 2) {
      const key = property[0].trim();
      const value = property[1].trim();

      result[key] = value;
    }
  });

  return result;
}

module.exports = convertToObject;
