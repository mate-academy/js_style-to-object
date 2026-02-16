'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  if (!sourceString || typeof sourceString !== 'string') {
    return {};
  }

  const r = {};

  const d = sourceString.split(';');

  d.forEach((dec) => {
    const trimmed = dec.trim();

    if (!trimmed) {
      return;
    }

    const colonIndex = trimmed.indexOf(':');

    if (colonIndex === -1) {
      return;
    }

    const property = trimmed.substring(0, colonIndex).trim();
    const value = trimmed.substring(colonIndex + 1).trim();

    if (!property || !value) {
      return;
    }
    r[property] = value;
  });

  return r;
}

module.exports = convertToObject;
