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

  const rules = sourceString.split(';');

  rules.forEach((rule) => {
    const [key, value] = rule.split(':').map((part) => {
      const trimmedPart = part.trim();

      return trimmedPart;
    });

    if (key && value) {
      result[key] = value;
    }
  });

  return result;
}

module.exports = convertToObject;
