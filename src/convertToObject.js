'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const formatedStyles = sourceString
    .replace(/\n/g, '')
    .split(';')
    .map(cssStyle => cssStyle.trim())
    .filter(cssStyle => cssStyle.length > 0)
    .map(cssStyle => cssStyle.split(':'))
    .map(styleElements => styleElements.map(element => element.trim()))
    .map(([parametr, value]) => ({ [parametr]: value }));
  const cssStyles = Object.assign({}, ...formatedStyles);

  return cssStyles;
}

module.exports = convertToObject;
