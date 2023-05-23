'use strict';

function convertToObject(sourceString) {
  const result = {};
  const stringSplit = sourceString.split(';');

  for (const entry of stringSplit) {
    const clean = entry.trim();

    if (clean.includes(':')) {
      const index = clean.indexOf(':');
      const name = clean.slice(0, index).trim();
      const value = clean.slice(index + 1, entry.length).trim();

      result[name] = value;
    }
  }

  return result;
}

module.exports = convertToObject;
