'use strict';

/**
 * Implement convertToObject function:
 *
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const rules = sourceString.split(';');
  const result = {};

  rules.map(i => i.trim())
    .filter(i => i.length > 0)
    .forEach(i => {
      const rule = i.split(':');
      const property = rule[0].trim();
      const value = rule[1].trim();

      result[property] = value;
    });

  return result;
};

module.exports = convertToObject;
