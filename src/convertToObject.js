'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in
 * [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylesList = sourceString.split(';');
  const allStyles = {};

  for (const style of stylesList) {
    const [key, value] = style.split(':').map(prop => prop.trim());

    if (key && value) {
      allStyles[key] = value;
    }
  }

  return allStyles;
}

module.exports = convertToObject;
