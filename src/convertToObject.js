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
  const stylesObject = sourceString
    .trim()
    .split(';')
    .map(style => style.trim())
    .filter(style => style.length > 0)
    .map(style => style.split(':'))
    .reduce((acc, [property, value]) => {
      acc[property.trim()] = value.trim();

      return acc;
    }, {});

  return stylesObject;
}

module.exports = convertToObject;
