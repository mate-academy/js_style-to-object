'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const cssStyles = sourceString.split(';');

  return cssStyles
    .filter((style) => style.trim() !== '')
    .map((style) => style.split(':'))
    .reduce((convertedStyles, style) => {
      const key = [style[0].trim()];
      const value = style[1] ? style[1].trim() : '';

      convertedStyles[key] = value;

      return convertedStyles;
    }, {});
}

module.exports = convertToObject;
