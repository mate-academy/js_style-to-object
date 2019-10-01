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
  const newArr = [];
  const splittedStr = sourceString.split(';');

  splittedStr.pop();
  for (const style of splittedStr) {
    newArr.push(style.split(':'));
  }
  for (const keyVal of newArr) {
    [keyVal[1], keyVal[0]] = [keyVal[1].trimLeft(), keyVal[0].trimLeft()];
    cssProperties[keyVal[0]] = keyVal[1];
  }

  return cssProperties;
}

module.exports = convertToObject;
