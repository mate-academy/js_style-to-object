'use strict';

/**

 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styleCss = sourceString
    .split(';')
    .filter(currentStyleElement => currentStyleElement.trim())
    .map(currentStyleElement => currentStyleElement.split(':'))
    .map(currentStyleElement =>
      currentStyleElement.map(currentStyKey => currentStyKey.trim()));

  const objStyleCss = Object.fromEntries(styleCss);

  return objStyleCss;
}

module.exports = convertToObject;
