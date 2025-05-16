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

  const styleProperties = {};
  const rules = sourceString
    .split(';')
    .map((rule) => rule.trim())
    .filter((rule) => rule !== '');

  rules.forEach((rule) => {
    const colonIndex = rule.indexOf(':');

    if (colonIndex === -1) {
      return;
    }

    const property = rule.slice(0, colonIndex).trim();
    const value = rule.slice(colonIndex + 1).trim();

    if (property && value) {
      styleProperties[property] = value;
    }
  });

  return styleProperties;
}
module.exports = convertToObject;
