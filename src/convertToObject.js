'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylesObj = {};

  sourceString
    .replace(/[\t+]/g, '')
    .split(';')
    .filter((style) => style.trim() !== '')
    .map((style) => style.split(':'))
    .map((style) => {
      style[0] = style[0].replaceAll(/[ '"\n]/g, '');
      style[1] = style[1].trim();
      stylesObj[style[0]] = style[1];
    });

  return stylesObj;
}

module.exports = convertToObject;
