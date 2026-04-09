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
      convertedStyles[style[0].trim()] = style[1].trim();

      return convertedStyles;
    }, {});
}

module.exports = convertToObject;
