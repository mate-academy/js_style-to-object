'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styles = {};
  let normalized = sourceString;

  normalized = normalized.split(';');

  for (let i = 0; i < normalized.length; i++) {
    if (normalized[i].trim()) {
      const [key, value] = normalized[i].split(':');

      styles[key.trim()] = value.trim();
    }
  }

  return styles;
}

module.exports = convertToObject;
