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

  return sourceString
    .split(';')
    .map((rule) => rule.trim())
    .filter((rule) => rule.length > 0)
    .reduce((styleProperties, rule) => {
      const colonIndex = rule.indexOf(':');

      if (colonIndex === -1) {
        return styleProperties;
      }

      const property = rule.slice(0, colonIndex).trim();
      const value = rule.slice(colonIndex + 1).trim();

      if (!property || !value) {
        return styleProperties;
      }

      styleProperties[property] = value;

      return styleProperties;
    }, {});
}

module.exports = convertToObject;
