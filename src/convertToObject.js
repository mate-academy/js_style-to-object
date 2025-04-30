'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};

  const rules = sourceString
    .trim()
    .split(';')
    .map((rule) => rule.trim())
    .filter((rule) => rule !== '');

  for (const rule of rules) {
    const parts = rule.split(':');

    if (parts.length === 2) {
      const key = parts[0].trim();
      const value = parts[1].trim();

      result[key] = value;
    }
  }

  return result;
}

module.exports = convertToObject;
