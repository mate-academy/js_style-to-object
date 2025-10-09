'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const cleaned = sourceString.replace(/\s+/g, ' ').trim();

  if (!cleaned) {
    return {};
  }

  const rules = cleaned
    .split(';')
    .map(rule => rule.trim())
    .filter(Boolean);

  const result = {};

  for (const rule of rules) {
    const [property, value] = rule.split(':').map(part => part.trim());

    if (property && value !== undefined) {
      result[property] = value;
    }
  }

  return result;
}

module.exports = convertToObject;
