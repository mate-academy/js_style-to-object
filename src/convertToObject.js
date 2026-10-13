'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  if (typeof sourceString !== 'string') {
    return {};
  }

  const styles = {};

  sourceString.split(';').forEach((rule) => {
    const trimmedRule = rule.trim();

    if (!trimmedRule) {
      return;
    }

    const separatorIndex = trimmedRule.indexOf(':');

    if (separatorIndex === -1) {
      return;
    }

    const property = trimmedRule.slice(0, separatorIndex).trim();
    const value = trimmedRule.slice(separatorIndex + 1).trim();

    if (!property || !value) {
      return;
    }

    styles[property] = value;
  });

  return styles;
}

module.exports = convertToObject;
