'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};

  const rules = sourceString.split(';');

  for (const rule of rules) {
    const [property, value] = rule.split(':');

    if (property && value) {
      const trimmedProperty = property.trim();
      const trimmedValue = value.trim();

      if (trimmedProperty && trimmedValue) {
        result[trimmedProperty] = trimmedValue;
      }
    }
  }

  return result;
}

module.exports = convertToObject;
