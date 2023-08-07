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
  const objectifiedString = sourceString
    .split(';')
    .map(prop => prop.trim().split(':'))
    .filter(prop => prop[0] !== '')
    .reduce((props, prop) => {
      const propertyKey = prop[0].trim();
      const propertyValue = prop[1].trim();

      return {
        ...props,
        [propertyKey]: propertyValue,
      };
    }, {});

  return objectifiedString;
}

module.exports = convertToObject;
