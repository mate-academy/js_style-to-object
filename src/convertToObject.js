'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const rules = {};

  sourceString
    .trim()
    .split(';')
    .forEach((rule) => {
      const [key, value] = rule
        .trim()
        .split(':')
        .map((part) => part.trim());

      rules[key] = value;
    });

  return rules;
}

module.exports = convertToObject;
