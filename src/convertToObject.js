'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const rules = sourceString.split(';');
  const filledRules = rules.filter((rule) => rule.trim());

  return filledRules.reduce((styles, rule) => {
    const parts = rule.split(':');

    const property = parts[0].trim();
    const value = parts.slice(1).join(':').trim();

    styles[property] = value;

    return styles;
  }, {});
}

module.exports = convertToObject;
