'use strict';

/**
 * @param {string} sourceString
 * @returns {Record<string, string>}
 */
function convertToObject(sourceString) {
  if (!sourceString) {
    return {};
  }

  return sourceString
    .split(';')
    .map((rule) => rule.replace(/\t/g, '').trim())
    .filter(Boolean)
    .map((cleaned) => {
      const colonIndex = cleaned.indexOf(':');

      if (colonIndex === -1) {
        return null;
      }

      const rawKey = cleaned.slice(0, colonIndex);
      const rawValue = cleaned.slice(colonIndex + 1);

      const key = rawKey.replace(/\s+/g, '').trim();
      const value = rawValue.trim();

      return key ? [key, value] : null;
    })
    .filter(Boolean)
    .reduce((styleObject, [key, value]) => {
      styleObject[key] = value;

      return styleObject;
    }, /** @type {Record<string, string>} */ ({}));
}

module.exports = convertToObject;
