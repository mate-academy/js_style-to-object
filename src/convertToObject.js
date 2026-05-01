'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const spliting = sourceString.split(';');
  const trimmed = spliting.map((s) => s.trim()).filter((s) => s);

  const result = {};

  trimmed.forEach((item) => {
    const colonIndex = item.indexOf(':');
    const key = item.substring(0, colonIndex).trim();
    const value = item.substring(colonIndex + 1).trim();

    result[key] = value;
  });

  return result;
}

module.exports = convertToObject;
