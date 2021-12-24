'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes string with styles
 * and returns object where CSS properties are keys
 * and values are the values of related CSS properties
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const result = {};

  const array = sourceString
    .split(';')
    .map(style => style.trim())
    .filter(style => style !== '');

  array.forEach((style) => {
    const objectStyle = style
      .split(':')
      .map(styleItem => styleItem.trim());

    result[objectStyle[0]] = objectStyle[1];
  });

  return result;
}

module.exports = convertToObject;
