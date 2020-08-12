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
  const result = {};
  const sourceArr = sourceString
    .split(';')
    .filter(style => Boolean(style.trim()))
    .map(style => style
      .split(':')
      .map(part => part.trim())
    );

  sourceArr.forEach(style => {
    result[style[0]] = style[1];
  });

  return result;
}

module.exports = convertToObject;
