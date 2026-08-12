'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const cleanRules = sourceString
    .split(';')
    .map((rule) => rule.trim())
    .filter((empty) => empty !== '');

  return cleanRules.reduce((parsedStyles, rule) => {
    const colonIndex = rule.indexOf(':');

    if (colonIndex !== -1) {
      const key = rule.slice(0, colonIndex).trim();
      const value = rule.slice(colonIndex + 1).trim();

      parsedStyles[key] = value;
    }

    return parsedStyles;
  }, {});
}

module.exports = convertToObject;
