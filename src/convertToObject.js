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
  const makeArraywithoutEmpty = sourceString
    .split(';').filter(element => element.includes(':'));
  const prepearingForStyle = makeArraywithoutEmpty
    .map(styles => styles.split(':')
      .map(partOfStyle => partOfStyle.trim()));

  const style = {};

  for (const part of prepearingForStyle) {
    style[part[0]] = part[1];
  }

  return style;
}

module.exports = convertToObject;
