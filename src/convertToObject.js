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
    .map(el => el.trim())
    .filter(el => el.length > 0)
    .map(el => el.split(':'))
    .map(el => el.map(word => word.trim()));

  const objStyleCss = Object.fromEntries(styleCss);

  return objStyleCss;
}

module.exports = convertToObject;
