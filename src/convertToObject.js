'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in
 * [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (see an exampl in
 * [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(sourceString) {
  const arrayStyles = sourceString.split(';');
  const correctArrayStyles = arrayStyles
    .map(style => style.split(':')
      .filter(property => property.length > 1)
      .map(correcrProperty => correcrProperty.trim()))
    .filter(property => property.length > 1);

  const convertedString = Object.fromEntries(correctArrayStyles);

  return convertedString;
}

module.exports = convertToObject;
