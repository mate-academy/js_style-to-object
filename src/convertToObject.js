'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in
 * [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (see an exampl
 * in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const splittedString = sourceString.split(';');

  const obj = {};

  for (const element of splittedString) {
    const [key, value] = element.split(':');

    if (key && value) {
      const propertyName = key.trim();
      const propertyValue = value.trim();

      obj[propertyName] = propertyValue;
    }
  }

  return obj;
}

module.exports = convertToObject;
