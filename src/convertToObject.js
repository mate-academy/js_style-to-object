'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const convert = {};

  const cssStyles = sourceString.trim().split(';');

  for (const item of cssStyles) {
    const idx = item.indexOf(':');

    if (idx === -1) {
      continue;
    }

    const key = item.slice(0, idx).trim();
    const value = item.slice(idx + 1).trim();

    convert[key] = value;
  }

  return convert;
}

module.exports = convertToObject;
