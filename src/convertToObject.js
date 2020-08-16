'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes string with styles
 * and returns object where CSS properties are keys
 * and values are the values of related CSS properties

 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const arr = sourceString.split(';');
  const result = {};

  arr.forEach(style => {
    const property = style.split(':');

    if (property[0] && property[1]) {
      result[property[0].trim()] = property[1].trim();
    };
  });

  return result;
}

module.exports = convertToObject;
