'use strict';


/**
 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(stylesString) {
  const objectCssStyles = {};
  const arrayStyleStrings = stylesString
    .split(';')
    .filter(item => item.includes(':'))
    .map(item => item.trim());

  arrayStyleStrings.forEach(item =>
    (objectCssStyles[item.slice(0, item.indexOf(':')).trim()]
    = item.slice(item.indexOf(':') + 1).trim()));

  return objectCssStyles;
}

module.exports = convertToObject;
