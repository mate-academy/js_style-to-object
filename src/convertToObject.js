'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes string with styles
 * and returns object where CSS properties are keys
 * and values are the values of related CSS properties

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
