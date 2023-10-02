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
    .replace(/[\r\n]/gm, '')
    .split(';')
    .filter((a) => a.length > 4)
    .sort((a, b) => a.localeCompare(b));

  for (const el of sourceArray) {
    const splittedEl = el.split(':');
    const key = splittedEl[0].trim();
    const value = splittedEl[1].trim();

    converted[key] = value;

    if (converted[key] === undefined) {
      delete converted[key];
    }
  }

  return converted;
}

module.exports = convertToObject;
