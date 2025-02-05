'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(/;\s*/)
    .map((rule) => rule.trim())
    .filter((rule) => rule && rule.includes(':'))
    .reduce((acc, rule) => {
      const [key, value] = rule.split(/:\s*/);

      acc[key.trim()] = value.trim();

      return acc;
    }, {});
}

module.exports = convertToObject;
