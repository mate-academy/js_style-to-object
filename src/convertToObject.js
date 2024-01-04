'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example
 * in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 *
 *
 */

function convertToObject(sourceString) {
  const stylesObj = {};
  const stylesArray = sourceString.split(';').map(style => style.trim());

  stylesArray.forEach(style => {
    if (style) {
      const [property, value] = style.split(':').map(part => part.trim());

      stylesObj[property] = value;
    }
  });

  return stylesObj;
}

module.exports = convertToObject;
