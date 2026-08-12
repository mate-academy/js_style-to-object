'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const rules = sourceString.split(';');
  const filteredRules = rules.filter((rule) => rule.trim() !== '');

  const parsedStylesObject = filteredRules.reduce((obj, rule) => {
    const colonIndex = rule.indexOf(':');
    const key = rule.slice(0, colonIndex).trim();
    const value = rule.slice(colonIndex + 1).trim();

    obj[key] = value;

    return obj;
  }, {});

  return parsedStylesObject;
}

module.exports = convertToObject;
