'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(sourceString) {
  // write your code here
  return sourceString
    .trim()
    .split(';')
    .reduce((rules, rule) => {
      const [key, value] = rule
        .trim()
        .split(':')
        .map((part) => part.trim());

      if (key) {
        rules[key] = value;
      }

      return rules;
    }, {});
}

module.exports = convertToObject;
