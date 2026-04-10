'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const converted = {};
  const trimmed = sourceString
    .trim()
    .split(';')
    .map((style) => style.trim())
    .filter((style) => style && style.indexOf(':') !== -1);

  trimmed.forEach((style) => {
    const colonIndex = style.indexOf(':');
    const key = style.slice(0, colonIndex).trim();
    const value = style.slice(colonIndex + 1).trim();

    if (key) {
      converted[key] = value;
    }
  });

  return converted;
}

module.exports = convertToObject;
