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
  const propsObj = {};
  const stylesArr = sourceString.split(';');

  for (let i = 0; i < stylesArr.length; i++) {
    const styleCssProp = stylesArr[i].trim().split(': ');
    propsObj[styleCssProp[0]] = styleCssProp[1];
  }

  return propsObj;
}

module.exports = convertToObject;
