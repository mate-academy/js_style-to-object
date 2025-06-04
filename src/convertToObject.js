'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const rules = sourceString.split(';').filter((rule) => rule.includes(':'));

  const result = rules.reduce((prev, rule) => {
    const index = rule.indexOf(':');
    const key = rule.slice(0, index).trim();
    const value = rule.slice(index + 1).trim();

    if (key && value) {
      prev[key] = value;
    }

    return prev;
  }, {});

  return result;
}

module.exports = convertToObject;
