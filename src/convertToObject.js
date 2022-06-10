'use strict';

/**
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylesArr = sourceString.split(';')
    .map(str => str.trim().split(':'))
    .filter(arr => arr.length > 1);

  const stylesObject = {};

  for (const style of stylesArr) {
    stylesObject[style[0].trim()] = style[1].trim();
  }

  return stylesObject;
}

module.exports = convertToObject;
