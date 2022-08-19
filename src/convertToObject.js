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

  sourceString.split(';')
    .filter(item => item.trim().length)
    .forEach(item => {
      const element = item.split(':');

      convertedStyles[element[0].trim()] = element[1].trim();
    });

  return convertedStyles;
}

module.exports = convertToObject;
