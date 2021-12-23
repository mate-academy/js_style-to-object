'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes string with styles
 * and returns object where CSS properties are keys
 * and values are the values of related CSS properties
 *
 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(sourceString) {
  const formattedStyles = {};

  let stylesString = '';

  for (let i = 1; i < sourceString.length - 1; i++) {
    stylesString += sourceString[i];
  }

  const stylesArray = stylesString
    .split(';')
    .map(style => style.trim())
    .map(style => style.split(':'));

  for (let i = 0; i < stylesArray.length; i++) {
    if (stylesArray[i][0] !== undefined && stylesArray[i][1] !== undefined) {
      stylesArray[i][0] = stylesArray[i][0].trim();
      stylesArray[i][1] = stylesArray[i][1].trim();
      formattedStyles[stylesArray[i][0]] = stylesArray[i][1];
    }
  }

  return formattedStyles;
}

module.exports = convertToObject;
