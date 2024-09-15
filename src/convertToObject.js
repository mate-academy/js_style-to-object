'use strict';

/**
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
