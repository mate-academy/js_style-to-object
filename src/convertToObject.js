'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example
 * in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 *  (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const splitedStyles = sourceString
    .split(';')
    .map(declaration => declaration.split(':'))
    .filter(property => property.length > 1);

  return splitedStyles.reduce(
    (resultObj, [property, value]) => {
      resultObj[property.trim()] = value.trim();

      return resultObj;
    }, {});
}

module.exports = convertToObject;
