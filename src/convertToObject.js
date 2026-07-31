'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};

  const stylesArray = sourceString.split(';');

  for (const item of stylesArray) {
    const style = item.trim();

    if (style === '') {
      continue;
    }

    const parts = style.split(':');

    const key = parts[0].trim();
    const value = parts[1].trim();

    result[key] = value;
  }

  return result;
}

module.exports = convertToObject;
