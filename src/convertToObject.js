'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  if (!sourceString.trim()) {
    return {};
  }

  return sourceString
    .split(';')
    .map((rule) => rule.trim())
    .filter((rule) => rule.length > 0 && rule.includes(':'))
    .reduce((stylesMap, rule) => {
      const separatorIndex = rule.indexOf(':');
      const property = rule.slice(0, separatorIndex).trim();
      const value = rule.slice(separatorIndex + 1).trim();

      return {
        ...stylesMap,
        [property]: value,
      };
    }, {});
}

module.exports = convertToObject;
