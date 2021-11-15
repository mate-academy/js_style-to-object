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

  while (normalized.includes('  ')
  || normalized.includes('\n')) {
    normalized = normalized.replace(/\s\s/g, '');
    normalized = normalized.replace(/\n/g, '');
  }

  normalized = normalized.split(';');

  for (let i = 0; i < normalized.length; i++) {
    if (normalized[i].trim()) {
      const index = normalized[i].indexOf(':');
      const key = normalized[i].slice(0, index);
      const value = normalized[i].slice(index + 1);

      styles[key.trim()] = value.trim();
    }
  }

  return styles;
}

module.exports = convertToObject;
