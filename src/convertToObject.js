'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  if (sourceString.length === 0) {
    return {};
  }

  const styles = {};
  const rules = sourceString.split(';');

  for (const rule of rules) {
    const parts = rule.split(':');

    if (parts.length === 2) {
      const key = parts[0].trim();
      const value = parts[1].trim();

      styles[key] = value;
    }
  }

  return styles;
}

module.exports = convertToObject;
