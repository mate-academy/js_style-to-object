'use strict';

/**
 * @param {string} sourceString
 * @returns {Record<string, string>}
 */
function convertToObject(sourceString) {
  if (!sourceString) {
    return {};
  }

  const obj = {};
  const rules = sourceString.split(';');

  for (const raw of rules) {
    const cleaned = raw.replace(/\t/g, '');

    if (!cleaned.trim()) {
      continue;
    }

    const colonIndex = cleaned.indexOf(':');

    if (colonIndex === -1) {
      continue;
    }

    const key = cleaned.slice(0, colonIndex).replace(/\s+/g, '').trim();
    const value = cleaned.slice(colonIndex + 1).trim();

    if (key) {
      obj[key] = value;
    }
  }

  return obj;
}

module.exports = convertToObject;
