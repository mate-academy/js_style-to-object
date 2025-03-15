'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};
  const rules = sourceString.split(';');

  rules.forEach((rule) => {
    if (!rule.trim()) {
      return;
    }

    const colonIndex = rule.indexOf(':');

    if (colonIndex === -1) {
      return;
    }

    const property = rule.substring(0, colonIndex).trim();

    result[property] = rule.substring(colonIndex + 1).trim();
  });

  return result;
}

module.exports = convertToObject;
