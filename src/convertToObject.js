'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};

  const rules = sourceString
    .split(';')
    .map((rule) => rule.trim())
    .filter((rule) => rule.length > 0);

  let currentProperty = null;

  for (const rule of rules) {
    const [property, ...valueParts] = rule.split(':');

    if (valueParts.length === 0) {
      if (currentProperty) {
        result[currentProperty] += `; ${property.trim()}`;
      }
      continue;
    }

    const key = property.trim();
    const value = valueParts.join(':').trim();

    result[key] = value;
    currentProperty = key;
  }

  return result;
}

module.exports = convertToObject;
