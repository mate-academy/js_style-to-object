'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};

  if (!sourceString) {
    return result;
  }

  const cleaned = sourceString.replace(/[\t\r]/g, ' ');

  const rules = cleaned.split(';');

  for (const r of rules) {
    if (!r.trim()) {
      continue;
    }

    const parts = r.split(':');

    if (parts.length < 2) {
      continue;
    }

    const property = parts[0].trim();
    const value = parts.slice(1).join(':').trim();

    if (property && value) {
      result[property] = value;
    }
  }

  return result;
}

module.exports = convertToObject;
