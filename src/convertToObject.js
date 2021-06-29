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
  const stylesObj = {};

  const splitStyles = sourceString
    .split(';')
    .map(style => style
      .split(':')
      .map(item => item.trim()))
    .filter(item => item.length > 1);

  splitStyles.forEach(arr => {
    stylesObj[arr[0]] = arr[1];
  });

  return stylesObj;
}

module.exports = convertToObject;
