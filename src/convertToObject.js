'use strict';

/**
 * @param {string} sourceString
 * @return {object}
 */
function convertToObject(sourceString) {
  if (!sourceString || typeof sourceString !== 'string') {
    return {};
  }

  const normalized = sourceString.replace(/\t/g, ' ');

  const rules = normalized
    .split(';')
    .map((rule) => rule.trim())
    .filter((rule) => rule.length > 0);

  const result = {};

  for (const rule of rules) {
    const [property, ...valueParts] = rule.split(':');

    if (!property || valueParts.length === 0) continue;

    const prop = property.trim();
    const value = valueParts.join(':').trimEnd().replace(/^\s+/, '');

    result[prop] = value;
  }

  return result;
}

module.exports = convertToObject;
