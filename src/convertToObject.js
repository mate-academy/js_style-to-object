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
  function getFormatDeclaration(prev, prop) {
    return {
      ...prev,
      [getTrim(prop[0])]: getTrim(prop[1]),
    };
  }

  function getTrim(property) {
    return property.trim();
  }

  return sourceString.split(';')
    .map(partString => partString.split(':'))
    .filter(notEmptyDeclaration => notEmptyDeclaration.length > 1)
    .reduce(getFormatDeclaration, {});
}

module.exports = convertToObject;
