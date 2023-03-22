'use strict';

/**
 * Implement convertToObject function:
 *
  * Function takes a string with styles
  * (see an example in [stylesString.js](./stylesString.js))
  * and returns an object where CSS properties are keys
  * and values are the values of related CSS properties (see an exampl
  * in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(sourceString) {
  const cssRulesObject = {};
  const cssRulesArray = sourceString.split(';')
    .map(cssItem => cssItem.slice(1).split(':'))
    .filter(cssItem => cssItem.length !== 1)
    .map(cssItem => cssItem.map(cssRule => cssRule.trim()));

  cssRulesArray.forEach(item => {
    const cssKey = item[0];
    const cssProperty = item[1];

    cssRulesObject[cssKey] = cssProperty;
  });

  return cssRulesObject;
}

module.exports = convertToObject;
