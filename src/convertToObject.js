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
  const cssArray = sourceString.split(';');
  const css = {};

  for (let i = 0; i < cssArray.length; i++) {
    let cssProperty = [];

    cssProperty = cssArray[i].split(':');

    if (cssProperty.length > 1) {
      css[cssProperty[0].trim()] = cssProperty[1].trim();
    }
  }

  return css;
}

module.exports = convertToObject;
