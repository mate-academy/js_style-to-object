'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(cssString) {
  const result = {};

  const rules = cssString
    .split(';')
    .map((rule) => rule.trim())
    .filter((rule) => rule.length > 0);

  rules.forEach((rule) => {
    const match = rule.match(/^\s*([\w-]+)\s*:\s*([\s\S]+)$/);

    if (match) {
      const [, property, value] = match;

      result[property] = value.trim();
    }
  });

  return result;
}

module.exports = convertToObject;
