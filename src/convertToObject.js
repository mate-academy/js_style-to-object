'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const style = {};

  for (const entry of sourceString.split(';')) {
    if (entry.trim() === '') {
      continue;
    }

    const [key, value] = entry.split(':');

    style[key.trim()] = value.trim();
  }

  return style;
}

module.exports = convertToObject;
