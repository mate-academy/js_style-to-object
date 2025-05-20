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
    const cleaned = rule.trim();

    if (!cleaned) {
      return;
    }

    const [rawKey, ...rest] = cleaned.split(':');

    if (!rawKey || rest.length === 0) {
      return;
    }

    const key = rawKey.trim();
    const value = rest.join(':').trim();

    if (key && value) {
      result[key] = value;
    }
  });

  return result;
}

module.exports = convertToObject;
