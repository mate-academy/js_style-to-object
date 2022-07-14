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
  const cssProperties = {};

  sourceString
    .split(';')
    .filter(propertyLine => propertyLine.includes(':'))
    .forEach(propertyLine => {
      const propertyNValue = propertyLine.trim().split(':');
      const propertyName = propertyNValue[0].trim();
      const propertyValue = propertyNValue[1].trim();

      cssProperties[propertyName] = propertyValue;
    });

  return cssProperties;
}

module.exports = convertToObject;
