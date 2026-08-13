'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .filter((rule) => rule.trim().length > 0)
    .reduce((acc, rule) => {
      const [key, ...valueParts] = rule.split(':');

      acc[key.trim()] = valueParts.join(':').trim();

      return acc;
    }, {});
}

module.exports = convertToObject;
