'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see
 * an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related
 * CSS properties (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const resultArray = {};

  sourceString
    .split(';')
    .filter(style => style.trim())
    .forEach(text => {
      const [name, value] = text.split(':');

      resultArray[name.trim()] = value.trim();
    });

  return resultArray;
}

module.exports = convertToObject;
