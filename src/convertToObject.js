'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styleObject = {};

  const rules = sourceString.split(';');

  rules.forEach((rule) => {
    const cleanedRule = rule.trim();

    if (!cleanedRule) {
      return;
    }

    const neededIndex = cleanedRule.indexOf(':');

    if (neededIndex === -1) {
      return;
    }

    const neededKey = cleanedRule.slice(0, neededIndex);
    const neededValue = cleanedRule.slice(neededIndex + 1);

    const key = neededKey.trim();
    const value = neededValue.trim();

    styleObject[key] = value;
  });

  return styleObject;
}

module.exports = convertToObject;
