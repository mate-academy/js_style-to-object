'use strict';
/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const result = {};

  const rules = sourceString
    .split(';')
    .map((rule) => rule.trim())
    .filter((rule) => rule);

  for (const rule of rules) {
    const colonIndex = rule.indexOf(':');

    if (colonIndex === -1) {
      continue;
    }

    const property = rule.slice(0, colonIndex).trim();
    const value = rule.slice(colonIndex + 1).trim();

    result[property] = value;
  }

  return result;
}

module.exports = convertToObject;
