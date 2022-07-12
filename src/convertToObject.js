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
    .map(propertyLine => propertyLine.trim())
    .filter(propertyLine => propertyLine.includes(':'))
    .map(propertyLine => propertyLine.split(':'))
    .map(propertyNValue => {
      const property = [];

      property.push(propertyNValue[0].trim());
      property.push(propertyNValue[1].trim());

      return property;
    })
    .forEach(property => {
      cssProperties[property[0]] = property[1];
    });

  return cssProperties;
}

module.exports = convertToObject;
