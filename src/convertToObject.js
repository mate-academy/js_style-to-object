'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const formattedStyles = {};

  sourceString.split(';').forEach((part) => {
    const trimmed = part.trim();

    if (!trimmed) {
      return;
    }

    const colonIndex = trimmed.indexOf(':');

    if (colonIndex === -1) {
      return;
    }

    const key = trimmed.slice(0, colonIndex).trim();
    const value = trimmed.slice(colonIndex + 1).trim();

    if (key && value) {
      formattedStyles[key] = value;
    }
  });

  return formattedStyles;
}

module.exports = convertToObject;
