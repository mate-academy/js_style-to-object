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

  const rules = sourceString.split(';').filter(Boolean);
  const result = {};

  for (const rule of rules) {
    const [property, value] = rule.split(':').map((part) => part.trim());

    result[property] = value;
  }

  return result;
}

module.exports = convertToObject;
