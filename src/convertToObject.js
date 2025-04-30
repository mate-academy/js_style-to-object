'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styleObj = {};

  const lines = sourceString.split(';');

  for (let line of lines) {
    line = line.trim();

    if (!line) {
      continue;
    }

    const colonIndex = line.indexOf(':');

    if (colonIndex === -1) {
      continue;
    }

    const key = line.slice(0, colonIndex).trim();
    const value = line.slice(colonIndex + 1).trim();

    styleObj[key] = value;
  }

  return styleObj;
}

module.exports = convertToObject;
