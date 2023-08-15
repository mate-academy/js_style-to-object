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
  const stylesArray = sourceString.trim().split(';');

  const styleObject = {};

  for (const style of stylesArray) {
    const [property, value] = style.split(':');

    if (property && value) {
      styleObject[property.trim()] = value.trim();
    }
  }

  return styleObject;
}

module.exports = convertToObject;
