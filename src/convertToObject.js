'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};

  const styles = sourceString.split(';');

  for (const style of styles) {
    const trimmed = style.trim();

    if (!trimmed) {
      continue;
    }

    const separatorIndex = trimmed.indexOf(':');

    const property = trimmed.slice(0, separatorIndex).trim();
    const value = trimmed.slice(separatorIndex + 1).trim();

    result[property] = value;
  }

  return result;
}

module.exports = convertToObject;
