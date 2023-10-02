'use strict';

/**
 * Implement convertToObject function:
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const converted = {};
  const sourceArray = sourceString
    .split(/\r?\n/)
    .join('')
    .split(';')
    .filter((a) => a.length > 4);

  for (const el of sourceArray) {
    let [key, value] = el.split(':');

    key = key.trim();
    value = value.trim();

    converted[key] = value;
  }

  return converted;
}

module.exports = convertToObject;
