'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example
 * in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 *  (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(stylesString) {
  const stylesArray = stylesString.split(';').filter(Boolean);

  const stylesObject = stylesArray
    .reduce((acc, styleDeclaration) => {
      const [property, value] = styleDeclaration
        .split(':').map((item) => item.trim());

      if (property && value) {
        acc[property] = value;
      }

      return acc;
    }, {});

  return stylesObject;
}

module.exports = convertToObject;
