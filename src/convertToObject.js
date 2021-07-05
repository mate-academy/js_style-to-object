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
  const styleObject = {};

  const splitSourceString = sourceString.split(';')
    .map(style => style
      .split(':')
      .map(item => item.trim()))
    .filter(item => item.length > 1);

  splitSourceString.forEach(arr => {
    styleObject[arr[0]] = arr[1];
  });

  return styleObject;
};

module.exports = convertToObject;
