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
  const result = {};
  const array = sourceString.split('\n').map(item => item.trim());

  for (const char of array) {
    if (!char) {
      continue;
    }

    const [nameOfProperty, property] = char.split(':').map(item => item.trim());

    if (nameOfProperty && property) {
      const value = property.replace(/;$/, '').trim();

      result[nameOfProperty] = value;
    }
  }

  return result;
}

module.exports = convertToObject;
