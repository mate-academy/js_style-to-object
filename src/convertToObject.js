'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};
  const rules = sourceString.split(';').filter(Boolean);

  for (const rule of rules) {
    const [key, value] = rule.trim().split(':');

    if (key && value) {
      result[key.trim()] = value.trim();
    }
  }

  return result;
}

module.exports = convertToObject;
