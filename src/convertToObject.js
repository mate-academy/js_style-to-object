'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
   const result = {};

  if (!sourceString) {
    return result;
  }

  const rules = sourceString.split(';');

  for (let rule of rules) {
    rule = rule.trim();

    if (!rule) continue;

    const colonIndex = rule.indexOf(':');

    if (colonIndex === -1) continue;

    const key = rule.slice(0, colonIndex).trim();
    const value = rule.slice(colonIndex + 1).trim();

    if (!key || !value) continue;

    result[key] = value;
  }

  return result;
}

module.exports = convertToObject;
