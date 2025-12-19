'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};

  sourceString.split(';').forEach((rule) => {
    if (!rule.includes(':')) {
      return;
    }

    const index = rule.indexOf(':');
    const key = rule.slice(0, index).trim();
    const value = rule.slice(index + 1).trim();

    if (!key || !value) {
      return;
    }

    result[key] = value;
  });

  return result;
}

module.exports = convertToObject;
