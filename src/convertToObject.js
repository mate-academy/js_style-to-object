'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .map((style) => style.trim())
    .filter((style) => style.length && style.includes(':'))
    .reduce((cssRules, rule) => {
      const [nameOfStyle, styleValue] = rule.split(':');

      cssRules[nameOfStyle.trim()] = styleValue.trim();

      return cssRules;
    }, {});
}

module.exports = convertToObject;
