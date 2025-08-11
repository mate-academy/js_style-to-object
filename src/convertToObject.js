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

  const result = {};

  const rules = sourceString
    .split(';')
    .map((rule) => rule.trim())
    .filter((rule) => rule.length > 0);

  for (const rule of rules) {
    const colonIndex = rule.indexOf(':');

    if (colonIndex === -1) {
      continue;
    }

    const property = rule.slice(0, colonIndex).trim();
    const value = rule.slice(colonIndex + 1).trim();

    if (!property || !value) {
      continue;
    }

    result[property] = value;
  }

  return result;
}

module.exports = convertToObject;
