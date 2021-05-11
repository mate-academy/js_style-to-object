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
  const stylesData = sourceString
    .split(';')
    .map(style => style.trim().split(': '));

  return stylesData.reduce((all, style) => {
    return style.length > 1
      ? {
        ...all,
        [style[0].trim()]: style[1].trim(),
      }

      : all;
  }, {});
}

module.exports = convertToObject;
