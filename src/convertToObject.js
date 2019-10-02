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
  const cssProperties = {};
  const splittedStr = sourceString.split(';');

  splittedStr.pop();
  splittedStr.forEach(item => {
    const newArr = item.split(':');
    cssProperties[newArr[0].trim()] = newArr[1].trim();
  });
  return cssProperties;
}

module.exports = convertToObject;
