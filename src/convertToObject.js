'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const style = {};
  const styleList = sourceString.split(';');

  for (let i = 0; i < styleList.length - 1; i++) {
    const splitedStyleItem = styleList[i].trim().split(': ');
    style[splitedStyleItem[0]] = splitedStyleItem[1];
  }
  return style;
}

module.exports = convertToObject;
