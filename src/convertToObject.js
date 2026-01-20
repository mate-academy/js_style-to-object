'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};

  // Split by ";" because CSS declarations end with semicolons.
  // Then parse each chunk as "property: value".
  // eslint-disable-next-line no-undef
  const declarations = sourceString.split(';');

  for (let i = 0; i < declarations.length; i++) {
    const raw = declarations[i].trim();

    // Skip empty chunks (e.g. extra ";" or blank lines)
    if (!raw) {
      continue;
    }

    const colonIndex = raw.indexOf(':');

    // Skip invalid declarations (no ":")
    if (colonIndex === -1) {
      continue;
    }

    const prop = raw.slice(0, colonIndex).trim();
    const value = raw.slice(colonIndex + 1).trim();

    // Skip if property or value is missing
    if (!prop || !value) {
      continue;
    }

    result[prop] = value;
  }

  return result;
}

module.exports = convertToObject;
