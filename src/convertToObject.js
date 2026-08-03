'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const result = {};

  const rules = sourceString.split(';');

  const filteredRules = rules.filter((rule) => rule.trim().length > 0);

  for (const rule of filteredRules) {
    const parts = rule.split(':');
    const key = parts[0].trim();
    const value = parts[1].trim();

    result[key] = value;
  }

  return result;
}

module.exports = convertToObject;
