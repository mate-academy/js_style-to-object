'use strict';

function convertToObject(sourceString) {
  const result = {};
  const sourceStringTrimmed = sourceString.trim();
  const stringSplit = sourceStringTrimmed.split(';');

  for (const entry of stringSplit) {
    if (entry.includes(':')) {
      const index = entry.indexOf(':');
      const name = entry.slice(0, index).trim();
      const value = entry.slice(index + 1, entry.length).trim();

      result[name] = value;
    }
  }

  return result;
}

module.exports = convertToObject;
