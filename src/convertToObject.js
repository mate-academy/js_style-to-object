'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylesObject = {};

  const rules = sourceString.split(';');

  rules.forEach((rule) => {
    const cleanRule = rule.trim();

    if (!cleanRule) return;

    const parts = cleanRule.split(':');

    if (parts.length < 2) return;

    const key = parts[0].trim();
    const value = parts[1].trim();

    if (!key || !value) return;

    stylesObject[key] = value;
  });

  return stylesObject;
}

module.exports = convertToObject;
