'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const cssProperties = {};

  const parts = sourceString.split(';');

  parts.forEach((part) => {
    const trimmed = part.trim();

    if (!trimmed) {
      return;
    }

    if (!trimmed.includes(':')) {
      return;
    }

    const difParts = trimmed.split(':');
    const key = difParts[0].trim();
    const value = difParts[1].trim();

    cssProperties[key] = value;
  });

  return cssProperties;
}

module.exports = convertToObject;
