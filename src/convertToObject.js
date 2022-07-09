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
  const styles = sourceString.split(';')
    .map(item => item.split(':'))
    .filter(style => style.length > 1)
    .map(([property, value]) => {
      return [property.trim(), value.trim()];
    });

  const result = {};

  styles.forEach(([property, value]) => {
    result[property] = value;
  });

  return result;
}

module.exports = convertToObject;
