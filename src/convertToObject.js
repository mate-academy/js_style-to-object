'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};

  if (!sourceString) {
    return result;
  }

  sourceString.split(';').forEach((rawItem) => {
    const item = rawItem.trim();

    if (!item) {
      return;
    }

    const colonIndex = item.indexOf(':');

    if (colonIndex === -1) {
      return;
    }

    const key = item.slice(0, colonIndex).trim();
    const value = item.slice(colonIndex + 1).trim();

    result[key] = value;
  });

  return result;
}
module.exports = convertToObject;
