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
  const array = sourceString.trim().split(';');
  const obj = {};

  for (let i = 0; i < array.length; i++) {
    const style = array[i].trim();

    if (style) {
      const [property, value] = style.split(':').map(s => s.trim());

      obj[property] = value;
    }
  }

  return obj;
}

module.exports = convertToObject;
