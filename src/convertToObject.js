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
  const splitedString = sourceString
    .split(';')
    .filter(style => style.trim() !== '');
  const styles = splitedString
    .map(style => style.split(':'))
    .reduce((properties, [key, value]) => {
      properties[key.trim()] = value.trim();

      return properties;
    }, {}
    );

  return styles;
}

module.exports = convertToObject;
