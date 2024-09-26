'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styleObject = {};

  const styleArray = sourceString.trim().split(';');

  for (const style of styleArray) {
    const [key, value] = style.trim().split(':');
    const cleanedKey = key.trim();

    if (cleanedKey) {
      styleObject[cleanedKey] = value.trim();
    }
  }

  return styleObject;
}

module.exports = convertToObject;
