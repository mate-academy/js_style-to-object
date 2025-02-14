'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylesArray = sourceString
    .replace(';' + /[\r\n]+/gm, ';')
    .split(';')
    .filter((style) => style.includes(':'))
    .map((style) => [style.split(':')[0].trim(), style.split(':')[1].trim()]);

  return stylesArray.reduce((styles, currentStyle) => {
    return {
      ...styles,
      [currentStyle[0]]: currentStyle[1],
    };
  }, {});
}

module.exports = convertToObject;
