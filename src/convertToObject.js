'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const convertedObject = {};
  const trimmedArr = sourceString
    .trim()
    .split(';')
    .map((style) => style.trim())
    .filter((style) => style && style.indexOf(':') !== -1);

  for (const style of trimmedArr) {
    const colonIndex = style.indexOf(':');
    const key = style.slice(0, colonIndex).trim();

    const value = style.slice(colonIndex + 1).trim();

    if (key) {
      convertedObject[key] = value;
    }
  }

  return convertedObject;
}

module.exports = convertToObject;
