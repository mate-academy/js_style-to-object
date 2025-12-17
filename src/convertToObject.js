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
    const trimmedRule = rule.trim();

    if (!trimmedRule) {
      return;
    }

    const [key, value] = trimmedRule.split(':');

    if (key && value) {
      stylesObject[key.trim()] = value.trim();
    }
  });

  return stylesObject;
}

module.exports = convertToObject;
