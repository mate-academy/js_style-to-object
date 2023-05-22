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
  const styles = {};

  const propertyLines = sourceString.trim().split(';');

  for (const line of propertyLines) {
    const [key, value] = line.split(':').map(prop => prop.trim());

    if (key && value) {
      styles[key] = value;
    }
  }

  return styles;
}

module.exports = convertToObject;
