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
  const array = sourceString.split(';');
  const result = {};
  const arrayProp = [];

  array.forEach(property => {
    if (property.trim().length > 0) {
      arrayProp.push(property.split(':'));
    }
  });

  arrayProp.forEach(style => {
    result[style[0].trim()] = style[1].trim();
  });

  return result;
}

module.exports = convertToObject;
