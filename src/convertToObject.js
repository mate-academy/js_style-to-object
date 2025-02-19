'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const rules = sourceString.split(';');

  const filterdRules = rules
    .map((rule) => rule.trim())
    .filter((rule) => rule !== '');

  const formattedRules = filterdRules
    .map((rule) => {
      const parts = rule.split(':').map((part) => part.trim());

      return parts.length === 2 ? parts : null;
    })
    .filter(Boolean);

  return Object.fromEntries(formattedRules);
}

module.exports = convertToObject;
