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
  let single = [];
  const css = {};

  for (let i = 0; i < cssArray.length; i++) {
    single = cssArray[i].split(':');

    if (single.length > 1) {
      css[single[0].trim()] = single[1].trim();
    }
  }

  return css;
}

module.exports = convertToObject;
