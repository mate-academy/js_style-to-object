'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};

  const parts = sourceString.split(';');

  parts.forEach((part) => {
    const cleanPart = part.trim();

    if (!cleanPart) {
      return;
    }

    const [key, value] = cleanPart.split(':');

    if (!value) {
      return;
    }

    const cleanKey = key.trim();
    const cleanValue = value.trim();

    result[cleanKey] = cleanValue;
  });

  return result;
}

module.exports = convertToObject;
