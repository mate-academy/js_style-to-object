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
  const splitedString = sourceString.split(';');

  splitedString.forEach(element => {
    if (element.length >= 5) {
      const [nameElement, valueElement] = element.split(':');
      const name = nameElement.trim();
      const value = valueElement.trim();

      result[name] = value;
    }
  });

  return result;
}

module.exports = convertToObject;
