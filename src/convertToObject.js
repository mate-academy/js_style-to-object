'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};
  const lines = sourceString.split(';');

  for (let i = 0; i < lines.length; i++) {
    const position = lines[i].indexOf(':');

    if (position === -1) {
      continue;
    }

    const value = lines[i].slice(position + 1);
    const clear = lines[i].slice(0, position).trim();

    result[clear] = value.trim();
  }

  return result;
}

module.exports = convertToObject;
