'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const sourceArr = sourceString.split(';');
  const stylesArr = sourceArr.map((style) => style.split(':'));
  const stylesObj = {};

  for (const style of stylesArr) {
    if (style.length > 1) {
      stylesObj[style[0].trim()] = style[1].trim();
    }
  }

  return stylesObj;
}

module.exports = convertToObject;
