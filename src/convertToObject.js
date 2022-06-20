'use strict';

/**
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const arrayOfStyles = sourceString.split(';')
    .map(str => str.trim().split(':'))
    .filter(arr => arr.length > 1);

  const objectOfStyles = {};

  for (const style of arrayOfStyles) {
    objectOfStyles[style[0].trim()] = style[1].trim();
  }

  return objectOfStyles;
}

module.exports = convertToObject;
