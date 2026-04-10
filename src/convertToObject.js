'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const trimmed = sourceString
    .trim()
    .split(';')
    .map((style) => style.trim())
    .filter((style) => style && style.indexOf(':') !== -1);

  const convertedStyles = trimmed.reduce((acc, style) => {
    const colonIndex = style.indexOf(':');
    const key = style.slice(0, colonIndex).trim();
    const value = style.slice(colonIndex + 1).trim();

    if (key) {
      acc[key] = value;
    }

    return acc;
  }, {});

  return convertedStyles;
}

module.exports = convertToObject;
