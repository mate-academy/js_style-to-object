'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  if (typeof sourceString !== 'string' || sourceString.trim() === '') {
    return {};
  }

  const styleRules = sourceString.split(';');

  return styleRules.reduce((cssProperties, rule) => {
    const trimmedRule = rule.trim();

    if (!trimmedRule) {
      return cssProperties;
    }

    const colonIndex = trimmedRule.indexOf(':');

    if (colonIndex === -1) {
      return cssProperties;
    }

    const propertyName = trimmedRule.slice(0, colonIndex).trim();
    const propertyValue = trimmedRule.slice(colonIndex + 1).trim();

    if (!propertyName || !propertyValue) {
      return cssProperties;
    }

    cssProperties[propertyName] = propertyValue;

    return cssProperties;
  }, {});
}

module.exports = convertToObject;
