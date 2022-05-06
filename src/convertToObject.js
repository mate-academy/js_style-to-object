'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in
 * [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (see an
 *  exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styles = {};

  sourceString.split(';')
    .map(rule => rule.split(':'))
    .forEach(([property, value]) => {
      const key = property.trim();

      if (key) {
        styles[key] = value.trim();
      }
    });

  return styles;
}

module.exports = convertToObject;
