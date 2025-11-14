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

  const parts = sourceString.split(';');
  const cleaned = parts.map((el) => el.trim()).filter((el) => el !== '');
  const result = {};

  cleaned.forEach((rule) => {
    const colonIndex = rule.indexOf(':');

    if (colonIndex === -1) {
      return;
    }

    const key = rule.slice(0, colonIndex).trim();
    const value = rule.slice(colonIndex + 1).trim();

    result[key] = value;
  });

  return result;
}

module.exports = convertToObject;
