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
  const prepearingForStyle = sourceString
    .split(';').filter(element => element.includes(':'))
    .map(styles => styles.split(':')
      .map(partOfStyle => partOfStyle.trim()));

  const readyToStyle = {};

  for (const part of prepearingForStyle) {
    readyToStyle[part[0]] = part[1];
  }

  return readyToStyle;
}

module.exports = convertToObject;
