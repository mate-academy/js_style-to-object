'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styles = {};

  sourceString
    .split(';')
    .map((rule) => rule.trim())
    .filter((rule) => rule !== '')
    .forEach((rule) => {
      const separatorIndex = rule.indexOf(':');

      if (separatorIndex === -1) {
        return;
      }

      const key = rule.slice(0, separatorIndex).trim();
      const value = rule.slice(separatorIndex + 1).trim();

      styles[key] = value;
    });

  return styles;
}

module.exports = convertToObject;
