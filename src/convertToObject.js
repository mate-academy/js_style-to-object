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
  const convertedStyles = {};

  sourceString
    .split(';')
    .filter(elem => elem.trim().length > 1)
    .map(property => {
      const objKey = property
        .split(':')[0]
        .trim();
      const objValue = property
        .split(':')[1]
        .trim();

      convertedStyles[objKey] = objValue;
    });

  return convertedStyles;
}

module.exports = convertToObject;
