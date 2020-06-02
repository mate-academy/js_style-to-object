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
  const sourceToArray = sourceString.split(';');
  let cssAloneString = [];
  const css = {};

  for (let i = 0; i < sourceToArray.length; i++) {
    cssAloneString = sourceToArray[i].split(':');

    if (cssAloneString.length > 1) {
      css[cssAloneString[0].trim()] = cssAloneString[1].trim();
    }
  }

  return css;
}

module.exports = convertToObject;
