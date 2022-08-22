'use strict';

/**
 * Implement convertToObject function:
 *
 * and returns an object where CSS properties are keys
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const cssObject = {};

  sourceString.split(';').filter(item => item.trim())
    .map(cssStyle => cssStyle.split(':'))
    .map((cssStyle) =>
      (cssObject[cssStyle[0].trim()] = cssStyle[1].trim()));

  return cssObject;
}

module.exports = convertToObject;
