'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(styles) {
  const arrayOfRules = styles
    .split(';')
    .map((rule) => rule.trim())
    .filter(Boolean);

  const objectOfRules = {};

  for (const rule of arrayOfRules) {
    const colonIndex = rule.indexOf(':');

    const key = rule.slice(0, colonIndex).trim();
    const value = rule.slice(colonIndex + 1).trim();

    objectOfRules[key] = value;
  }

  return objectOfRules;
}

module.exports = convertToObject;
