'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};

  const rules = sourceString.split(';');

  rules.forEach((rule) => {
    const trimmedRule = rule.trim();

    if (trimmedRule) {
      const [property, value] = trimmedRule
        .split(':')
        .map((item) => item.trim());

      result[property] = value;
    }
  });

  return result;
}

module.exports = convertToObject;
