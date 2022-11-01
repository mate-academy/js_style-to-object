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
  const stylesArray = sourceString.split(';');

  return stylesArray
    .filter(property => property.includes(':'))
    .map(property => property.split(':'))
    .reduce((prev, property) => {
      const propertyName = property[0].trim();
      const propertyValue = property[1].trim();

      return {
        ...prev,
        [propertyName]: propertyValue,
      };
    }, {});
}

module.exports = convertToObject;
