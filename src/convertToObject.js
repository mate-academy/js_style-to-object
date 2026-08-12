'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const rules = sourceString.split(';');
  const filteredRules = rules.filter((rule) => rule.trim() !== '');

  const result = filteredRules.reduce((obj, rule) => {
    const parts = rule.split(':');
    const key = parts[0].trim();
    const value = parts[1].trim();

    obj[key] = value;

    return obj;
  }, {});

  return result;
}

module.exports = convertToObject;
