'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const convertedStyles = {};

  sourceString
    .split(';')
    .map(element => element.trim())
    .filter(element => element.includes(':'))
    .map(property => {
      return [property.split(':')[0].trim(),
        property.split(':')[1].trim()];
    })
    .forEach(element => {
      convertedStyles[element[0]] = element[1];
    });

  return convertedStyles;
}

module.exports = convertToObject;
