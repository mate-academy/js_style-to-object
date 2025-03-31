'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  return sourceString
    .split(/;\s*\n*/)
    .map((rule) => rule.trim())
    .filter((rule) => rule)
    .reduce((acc, rule) => {
      const match = rule.match(/^([^:]+):\s*([\s\S]+)$/);

      if (match) {
        const property = match[1].trim();
        const value = match[2].trim();

        acc[property] = value;
      }

      return acc;
    }, {});
}

module.exports = convertToObject;
