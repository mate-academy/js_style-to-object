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

  const result = {};

  const rules = sourceString
    .split(';')
    .map((rule) => rule.trim())
    .filter(Boolean);

  rules.forEach((rule) => {
    const [key, ...valueParts] = rule.split(':');

    if (key && valueParts.length > 0) {
      const value = valueParts.join(':').trim();

      result[key.trim()] = value;
    }
  });

  return result;
}

module.exports = convertToObject;
