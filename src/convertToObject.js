'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(stylesString) {
  const stylesObject = {};

  const rules = stylesString.split(';');

  for (const rule of rules) {
    const trimmedRule = rule.trim();

    if (!trimmedRule) {
      continue;
    }

    const [key, ...valueParts] = trimmedRule.split(':');

    if (!key || valueParts.length === 0) {
      continue;
    }

    const property = key.trim();
    const value = valueParts.join(':').trim();

    stylesObject[property] = value;
  }

  return stylesObject;
}

module.exports = convertToObject;
