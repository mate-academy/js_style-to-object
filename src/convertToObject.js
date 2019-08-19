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
  const stylePropsObject = {};
  const styleString = sourceString.split(';');
  let styleElement;

  for (let i = 0; i < styleString.length; i++) {
    styleElement = styleString[i].trim().split(': ');
    stylePropsObject[styleElement[0]] = styleElement[1];
  }

  return stylePropsObject;
}

module.exports = convertToObject;
