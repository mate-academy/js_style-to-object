'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};
  const lines = sourceString.split('\n');
  let buffer = '';

  for (const line of lines) {
    const trimmedLine = line.trim();

    if (!trimmedLine && !buffer) {
      continue;
    }

    buffer += (buffer ? '\n' : '') + line;

    while (buffer.includes(';')) {
      const semicolonIndex = buffer.indexOf(';');
      const declaration = buffer.slice(0, semicolonIndex).trim();

      buffer = buffer.slice(semicolonIndex + 1).trim();

      if (!declaration) {
        continue;
      }

      const colonIndex = declaration.indexOf(':');

      if (colonIndex === -1) {
        continue;
      }

      const key = declaration.slice(0, colonIndex).trim();
      const value = declaration.slice(colonIndex + 1).trim();

      result[key] = value;
    }
  }

  if (buffer) {
    const colonIndex = buffer.indexOf(':');

    if (colonIndex !== -1) {
      const key = buffer.slice(0, colonIndex).trim();
      const value = buffer.slice(colonIndex + 1).trim();

      result[key] = value;
    }
  }

  return result;
}

module.exports = convertToObject;
