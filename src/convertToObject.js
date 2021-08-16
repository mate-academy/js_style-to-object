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
  const stylesEdited = sourceString
    .split(';')
    .map(style => style.split(':')
      .map(prop => prop.trim())
    )
    .filter(style => style.length === 2);

  const stylesObj = {};

  for (const style of stylesEdited) {
    stylesObj[style[0]] = style[1];
  }

  return stylesObj;
}

module.exports = convertToObject;
