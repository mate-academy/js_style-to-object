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
    const clearRule = rule.trim();

    if (clearRule) {
      const parts = clearRule.split(':');
      const key = parts[0].trim();
      const value = parts.length > 1 ? parts.slice(1).join(':').trim() : '';

      if (key) {
        result[key] = value;
      }
    }
  });

  return result;
}

module.exports = convertToObject;
