'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const cleanedSourceString = sourceString.trim().replace(/;$/, '');

  const result = {};

  const rules = cleanedSourceString.split(';');

  rules.forEach((rule) => {
    if (rule.trim()) {
      const [key, value] = rule.split(':').map((part) => part.trim());

      if (key && value !== undefined) {
        result[key] = value;
      }
    }
  });

  return result;
}

module.exports = convertToObject;
