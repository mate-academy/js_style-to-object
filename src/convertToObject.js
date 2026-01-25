'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const cssStyles = {};

  sourceString
    .split(';')
    .map((rule) => rule.trim())
    .filter((rule) => rule.includes(':'))
    .forEach((rule) => {
      const [key, value] = rule.split(':');

      cssStyles[key.trim()] = value.trim();
    });

  return cssStyles;
}

module.exports = convertToObject;
