'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const properties = {};

  sourceString
    .split(';')
    .map((rule) => rule.trim())
    .filter((rule) => rule.includes(':'))
    .forEach((rule) => {
      const [key, rest] = rule.split(':');

      properties[key.trim()] = rest.trim();
    });

  return properties;
}

module.exports = convertToObject;
