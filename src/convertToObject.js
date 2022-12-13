'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const properties = sourceString
    .split(';')
    .map(style => style.trim())
    .filter(Boolean)
    .map(style => style.split(':'))
    .reduce((prev, [key, value]) => ({
      ...prev,
      [key.trim()]: value.trim(),
    }), {});

  return properties;
}

module.exports = convertToObject;
