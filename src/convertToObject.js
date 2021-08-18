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
  const stylesFormated = sourceString.split(';')
    .map(style => style.split(':')
      .map(prop => prop.trim()))
    .filter(style => style.length === 2);

  const stylesObject = {};

  for (const style of stylesFormated) {
    stylesObject[style[0]] = style[1];
  }

  return stylesObject;
}

module.exports = convertToObject;
