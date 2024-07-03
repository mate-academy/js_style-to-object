'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(sourceString) {
  // write your code here
  const cssStyle = sourceString
    .split(';')
    .map((item) => item.split(':'))
    .map((item) => item.map((value) => value.trim()))
    .reduce((styleObject, itemObj) => {
      styleObject[itemObj[0]] = itemObj[1];

      return styleObject;
    }, {});

  return cssStyle;
}

module.exports = convertToObject;
