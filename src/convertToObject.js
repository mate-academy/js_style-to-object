'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};
  const rules = sourceString
    .split(';')
    .map(rule => rule.trim())
    .filter(Boolean);

  for (let i = 0; i < rules.length; i++) {
    const rule = rules[i];
    const parts = rule.split(':');
    if (parts.length < 2) continue;

    const key = parts[0].trim();
    const value = parts.slice(1).join(':').trim();

    result[key] = value;
  }

  return result;
}

module.exports = convertToObject;
