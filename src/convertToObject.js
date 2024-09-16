'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = sourceString.split(';')
    .map(rules => rules.trim())
    .filter(Boolean)
    .map(rule => rule.split(':'))
    .map(parts => [parts[0].trim(), parts[1].trim()]);

  return Object.fromEntries(result);
}

module.exports = convertToObject;
