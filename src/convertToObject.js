'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  return sourceString
    .split(';')
    .map((rule) => rule.trim())
    .filter((rule) => rule)
    .reduce((acc, rule) => {
      const [key, ...rest] = rule.split(':');

      if (!key || rest.length === 0) {
        return acc;
      }

      acc[key.trim()] = rest.join(':').trim();

      return acc;
    }, {});
}

module.exports = convertToObject;
