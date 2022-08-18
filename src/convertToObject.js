'use strict';

/**

 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const cssStyles = {};

  sourceString.split(';')
    .filter((element) => element.trim())
    .map((element) => element.split(':'))
    .map((element) => (cssStyles[element[0].trim()] = element[1].trim()));

  return cssStyles;
}

module.exports = convertToObject;
