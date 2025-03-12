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

    const [property, value] = trimmedRule.split(':').map((part) => part.trim());

    if (property && value) {
      result[property] = value;
    }
  }

  return result;
}

module.exports = convertToObject;
