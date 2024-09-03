'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = sourceString.split(';')
    .map(cssRule => cssRule.split(':')
      .map(cssRuleItem => cssRuleItem.trim()))
    .filter(cssRule => cssRule.length > 1);

  return Object.fromEntries(result);
}

module.exports = convertToObject;
