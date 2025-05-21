'use strict';

/* eslint-disable no-console */

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

  for (const rule of rules) {
    const [property, ...valueParts] = rule.split(':');

    if (!property || valueParts.length === 0) {
      continue;
    }

    const key = property.trim();
    const value = valueParts.join(':').trim();

    result[key] = value;
  }

  return result;
}

module.exports = convertToObject;
