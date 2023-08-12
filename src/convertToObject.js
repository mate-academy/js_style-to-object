'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are
 * the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const convertedObject = {};

  sourceString
    .split(';')
    .map(item => item.split(':').map(part => part.trim()))
    .filter(prop => prop.length > 1)
    .forEach(style => {
      convertedObject[style[0]] = style[1];
    });

  return convertedObject;
}

module.exports = convertToObject;
