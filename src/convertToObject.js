'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};

  const cleaned = sourceString.replace(/\t/g, '').replace(/\r/g, '');

  const rules = cleaned
    .split(';')
    .map((rule) => rule.trim())
    .filter((rule) => rule.length > 0);

  for (const rule of rules) {
    const parts = rule.split(':');

    if (parts.length < 2) {
      continue;
    }

    const key = parts[0].trim();
    const value = parts
      .slice(1)
      .join(':')
      .replace(/^\s+|\s+$/g, '');

    result[key] = value;
  }

  return result;
}

module.exports = convertToObject;
