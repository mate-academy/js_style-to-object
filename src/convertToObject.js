'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};
  const cleanRules = sourceString
    .split(';')
    .map((rule) => rule.trim())
    .filter((empty) => empty !== '');

  for (const rule of cleanRules) {
    const colonIndex = rule.indexOf(':');

    if (colonIndex !== -1) {
      const key = rule.slice(0, colonIndex).trim();
      const value = rule.slice(colonIndex + 1).trim();

      result[key] = value;
    }
  }

  return result;
}

module.exports = convertToObject;
