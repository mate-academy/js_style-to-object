'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const trimmed = sourceString.trim();
  const splited = trimmed.split(';');
  const filtered = splited.filter(
    (part) => part.trim().length > 0 && part.trim().includes(':'),
  );

  const result = {};

  filtered.forEach((part) => {
    const str = part.trim();
    const index = str.indexOf(':');

    if (index === -1) {
      return;
    }

    const key = str.slice(0, index).trim();
    const value = str.slice(index + 1).trim();

    if (key) {
      result[key] = value;
    }
  });

  return result;
}

module.exports = convertToObject;
