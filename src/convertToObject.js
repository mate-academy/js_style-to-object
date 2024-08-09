'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const rules = sourceString.split(';');

  const result = {};

  rules.forEach((rule) => {
    const [key, value] = rule.split(':').map((part) => part.trim());

    result[key] = value;
  });

  return result;
}

module.exports = convertToObject;
