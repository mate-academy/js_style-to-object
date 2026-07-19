'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const cssStyles = sourceString.split(';');

  return cssStyles
    .map((style) => style.trim())
    .filter((style) => style.includes(':'))
    .reduce((accumulator, style) => {
      const colonIndex = style.indexOf(':');

      const key = style.slice(0, colonIndex).trim();
      const value = style.slice(colonIndex + 1).trim();

      accumulator[key] = value;

      return accumulator;
    }, {});
}

module.exports = convertToObject;
