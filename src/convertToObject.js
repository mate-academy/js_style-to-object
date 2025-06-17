'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const res = {};
  const rules = sourceString
    .split(';')
    .map((rule) => rule.trim())
    .filter(Boolean);

  for (const rule of rules) {
    const [rawKey, ...rest] = rule.split(':');

    if (!rawKey || rest.length === 0) {
      continue;
    }

    const key = rawKey.trim();
    const value = rest.join(':').trim();

    res[key] = value;
  }

  return res;
}

module.exports = convertToObject;
