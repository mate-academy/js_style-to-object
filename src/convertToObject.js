'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};

  const cleaned = sourceString.replace(/\r/g, '').replace(/\t/g, '');

  cleaned.split(';').forEach((rule) => {
    const line = rule.trim();

    if (!line.includes(':')) {
      return;
    }

    const [rawKey, ...rawValue] = line.split(':');
    const key = rawKey.trim();
    const value = rawValue.join(':').trim();

    if (key && value) {
      result[key] = value;
    }
  });

  return result;
}

module.exports = convertToObject;
