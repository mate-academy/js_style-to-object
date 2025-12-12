'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const allRules = sourceString
    .split(';')
    .map((styleRule) => styleRule.trim())
    .filter((styleRule) => styleRule.length > 0);

  const stylesList = allRules
    .map((style) => style.split(':'))
    .reduce(
      (result, style) => ({
        ...result,
        [style[0].trim()]: style[1].trim(),
      }),
      {},
    );

  return stylesList;
}

module.exports = convertToObject;
