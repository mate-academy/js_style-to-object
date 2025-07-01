'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};

  sourceString
    .split(';')
    .map((rule) => rule.trim())
    .filter((rule) => rule)
    .forEach((rule) => {
      const [key, ...valueParts] = rule.split(':');

      if (key && valueParts.length > 0) {
        const value = valueParts.join(':').trim();

        result[key.trim()] = value;
      }
    });

  return result;
}

module.exports = convertToObject;
