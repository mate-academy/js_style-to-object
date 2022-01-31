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
  const converted = {};

  sourceString
    .split(';')
    .filter(elem => elem.trim() !== '')
    .forEach(element => {
      converted[element.split(':')[0].trim()] = element.split(':')[1].trim();
    });

  return converted;
}

module.exports = convertToObject;
