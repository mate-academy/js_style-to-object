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
    .map(oneStyle => oneStyle.split(':'));

  const deleteSpacesArrrayIsReady = prepearingForStyle
    .map(partOfStyle => [partOfStyle[0].trim(), partOfStyle[1].trim()]);

  const style = {};

  for (const part of deleteSpacesArrrayIsReady) {
    style[part[0]] = part[1];
  }

  return style;
}

module.exports = convertToObject;
