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
  const stylesArray = sourceString.split(';');

  for (let i = 0; i < stylesArray.length; i++) {
    const style = stylesArray[i].trim().split(': ');
    styleObject[style[0]] = style[1];
  }

  return styleObject;
}

module.exports = convertToObject;
