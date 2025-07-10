'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};
  const rules = sourceString.split(';');

  for (const rule of rules) {
    const trimmedRule = rule.trim();

    if (!trimmedRule) {
      continue;
    }

    const [key, ...rest] = trimmedRule.split(':');

    if (!key || rest.length === 0) {
      continue;
    }

    const value = rest.join(':');

    result[key.trim()] = value.trim();
  }

  return result;
}

module.exports = convertToObject;
