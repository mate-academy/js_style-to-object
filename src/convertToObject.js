'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const cssStyles = {};
  const arrOfStyles = sourceString
    .split(';')
    .map(element => element.split(':'))
    .filter(element => element.length > 1);

  for (const style of arrOfStyles) {
    cssStyles[style[0].trim()] = style[1].trim();
  }

  return cssStyles;
}

module.exports = convertToObject;
