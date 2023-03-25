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
  const styles = sourceString
    .split(';')
    .filter(prop => prop.trim() !== '')
    .map(prop => prop.trim().split(':'))
    .reduce((acc, [prop, value]) => {
      acc[prop.trim()] = value.trim();

      return acc;
    }, {});

  return styles;
}

module.exports = convertToObject;
